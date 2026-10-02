import { LocalizedText } from "@/components/site/localized-text";

export function DlsmOverviewVideo() {
  return (
    <div id="dlsm-video" className="scroll-mt-28 overflow-hidden rounded-[28px] border border-sky-100 bg-white">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div>
          <h3 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
            <LocalizedText zh="四分钟了解 DLSM" zhTW="四分鐘了解 DLSM" en="DLSM in four minutes" />
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            <LocalizedText
              zh="从数据分层、流转和退出，到 AIDC 运营中的合规、能效与收益评估。"
              zhTW="從資料分層、流轉和退出，到 AIDC 營運中的合規、能效與收益評估。"
              en="Explore data tiering, transfer and disposition, alongside compliance, energy efficiency and return assessment for AIDC operations."
            />
          </p>
        </div>
        <p className="shrink-0 text-sm text-slate-500">
          <LocalizedText zh="4 分钟 · 普通话配音 · 中文字幕" zhTW="4 分鐘 · 普通話配音 · 中文字幕" en="4 min · Mandarin audio · Chinese captions" />
        </p>
      </div>
      <video
        className="aspect-video w-full bg-[#03101e]"
        controls
        playsInline
        preload="none"
        poster="/videos/dlsm-overview-4min-poster.jpg"
        aria-label="DLSM overview: Mandarin audio with Chinese captions"
        width={1920}
        height={1080}
      >
        <source src="/videos/dlsm-overview-4min-zh-cn.mp4" type="video/mp4" />
        <LocalizedText zh="您的浏览器不支持视频播放，请使用下方链接打开视频。" en="Your browser does not support video playback. Open the video using the link below." />
      </video>
      <div className="flex flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-sm sm:px-8">
        <a href="/videos/dlsm-overview-4min-zh-cn.mp4" className="font-medium text-primary underline-offset-4 hover:underline">
          <LocalizedText zh="单独打开视频" zhTW="單獨開啟影片" en="Open the video" />
        </a>
      </div>
    </div>
  );
}
