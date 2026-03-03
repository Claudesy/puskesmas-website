import { useEffect, useMemo, useState } from 'react';
import { Activity, CalendarClock, ClipboardCheck, Sparkles } from 'lucide-react';

type StoryStep = {
  id: string;
  label: string;
  icon: typeof CalendarClock;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const StoryScroll = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        id: 'reservasi',
        label: 'Reservasi',
        icon: CalendarClock,
      },
      {
        id: 'pemeriksaan',
        label: 'Pemeriksaan',
        icon: Activity,
      },
      {
        id: 'tindak-lanjut',
        label: 'Tindak Lanjut',
        icon: ClipboardCheck,
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [isStoryVisible, setIsStoryVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const getTop = (id: string): number | null => {
      const target = document.getElementById(id);
      return target ? target.offsetTop : null;
    };

    const update = () => {
      const heroTop = getTop('hero');
      const servicesTop = getTop('services');
      const reservationTop = getTop('reservation');

      if (heroTop === null || servicesTop === null || reservationTop === null) {
        setReady(false);
        return;
      }

      setReady(true);

      const viewportProbe = window.scrollY;
      const firstPivot = Math.max(heroTop, 0);
      const secondPivot = Math.max(servicesTop, firstPivot + 1);
      const thirdPivot = Math.max(reservationTop, secondPivot + 1);
      const revealThreshold = firstPivot + window.innerHeight * 0.4;

      setIsStoryVisible(viewportProbe >= revealThreshold);

      let nextProgress = 0;

      if (viewportProbe <= secondPivot) {
        const local = (viewportProbe - firstPivot) / (secondPivot - firstPivot);
        nextProgress = clamp(local, 0, 1) * 0.5;
      } else {
        const local = (viewportProbe - secondPivot) / (thirdPivot - secondPivot);
        nextProgress = 0.5 + clamp(local, 0, 1) * 0.5;
      }

      setProgress(nextProgress);

      if (viewportProbe >= thirdPivot) {
        setActiveIndex(2);
      } else if (viewportProbe >= secondPivot) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };

    const onScrollOrResize = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <div
        className={`hidden xl:block fixed left-3 top-1/2 -translate-y-1/2 z-40 pointer-events-none transition-opacity duration-300 ${
          isStoryVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-[138px] rounded-xl p-2 neo-card opacity-85">
          <div className="flex items-center gap-1 text-[#8B7D6F] mb-1.5">
            <Sparkles className="w-2.5 h-2.5 text-[#C9A87C]" />
            <p className="text-[8px] uppercase tracking-[0.16em]">Story</p>
          </div>

          <div
            className="relative pl-3"
            role="progressbar"
            aria-label="Progress alur layanan"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div className="absolute left-[3px] top-1 bottom-1 w-px bg-[#E9DDD0]" />
            <div
              className="absolute left-[3px] top-1 w-px rounded-full bg-gradient-to-b from-[#C9A87C] to-[#A98352] transition-all duration-300"
              style={{ height: `${clamp(progress, 0, 1) * 100}%` }}
            />

            <div className="space-y-2">
              {steps.map((step, index) => {
                const isActive = index <= activeIndex;
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative">
                    <span
                      className={`absolute -left-[10px] top-1 h-2 w-2 rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#C9A87C] border-[#C9A87C] shadow-[0_0_0_2px_rgba(201,168,124,0.12)]'
                          : 'bg-white border-[#D7C8B5]'
                      }`}
                    />
                    <div
                      className={`rounded-md px-1 py-0.5 transition-all duration-300 ${
                        isActive ? 'neo-control' : ''
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Icon className={`w-2.5 h-2.5 ${isActive ? 'text-[#A98352]' : 'text-[#B8A48D]'}`} />
                        <p className={`text-[9px] font-medium ${isActive ? 'text-[#2D2420]' : 'text-[#8B7D6F]'}`}>
                          {step.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden fixed left-0 right-0 top-[74px] z-40 px-4 pointer-events-none transition-opacity duration-300 ${
          isStoryVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="rounded-lg px-2.5 py-1.5 neo-card opacity-85">
          <div className="flex items-center justify-between gap-3 text-[9px] text-[#8B7D6F]">
            <span className="uppercase tracking-[0.14em]">Story</span>
            <span className="text-[#A98352] font-medium">{steps[activeIndex]?.label}</span>
          </div>
          <div className="mt-1 h-[3px] rounded-full bg-[#E9DDD0] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#C9A87C] to-[#A98352] transition-all duration-300"
              style={{ width: `${clamp(progress, 0, 1) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryScroll;
