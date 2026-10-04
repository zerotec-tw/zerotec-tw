import { useState } from "react";

const products = [
  {
    id: "URBAN",
    name: "URBAN",
    subtitle: "半罩通勤，透氣不包脖。",
    title: "ZERO-TEC™ Urban 短版 騎士頭套，安全帽更好穿脫。",
    longDesc: "每天短程通勤安全帽最難穿脫。ZERO-TEC Urban短版為半罩而生。Matrix-Lock™一戴就定位不捲邊，脫帽不被帶走。Zero-Friction™ 0.3mm戴像沒戴。隔絕汗油內襯不易弄髒，下班丟洗衣機就好。不包脖子夏天最透氣。附加ZERO-TEC DRY™防曬排汗。",
    shortDesc: "騎士頭套Urban短版，安全帽好穿脫不位移脫帽不被帶走，內襯不易弄髒0.3mm無痕不包脖子。",
    shopeeTitle: "ZERO-TEC 騎士頭套 Urban短版｜安全帽好穿脫不位移｜內襯不易弄髒 透氣無痕 安全帽頭套",
    points: [
      "好穿脫Matrix-Lock™零滑移零捲邊脫帽不被帶走",
      "不弄髒隔絕汗油好清洗",
      "0.3mm無痕4針6線久戴無勒痕",
      "Opti-Space™全景不壓眼鏡腳",
      "附加ZERO-TEC DRY™防曬排汗透氣"
    ],
    tag: "短版 / 不包脖子",
    price: "NT$ 490",
    specs: ["不包脖子", "透氣", "半罩通勤", "夏季外送", "臉部附加防曬"]
  },
  {
    id: "TOURING",
    name: "TOURING",
    subtitle: "全包覆到脖子，長途巡航不位移。",
    title: "ZERO-TEC™ Touring 長版 全包覆 騎士頭套，長途不弄髒。",
    longDesc: "長途環島全罩最悶。Touring全包覆到脖子。Matrix-Lock™高速巡航零滑移零捲邊，脫安全帽時頭套不被一起扯下來。包到脖子汗油不沾內襯，脖子色差也一起歸零。0.3mm無痕+3D眼周長途無感視野無遮。附加ZERO-TEC DRY™ UPF50+脖子防曬剛好。",
    shortDesc: "騎士頭套Touring長版全包覆，安全帽好穿脫不位移包到脖子，內襯不易弄髒長途必備。",
    shopeeTitle: "ZERO-TEC 騎士頭套 Touring長版全包覆｜安全帽好穿脫｜包脖子防曬 UPF50+ 長途環島",
    points: [
      "全包覆到脖子內襯不易弄髒防曬UPF50+",
      "好穿脫Matrix-Lock™高速零滑移脫帽不被帶走",
      "0.3mm無痕長途無勒痕",
      "Opti-Space™全景不壓眼鏡腳",
      "ZERO-TEC DRY™排汗速乾不悶汗"
    ],
    tag: "長版 / 包到脖子",
    price: "NT$ 590",
    specs: ["包到脖子", "防曬UPF50+", "全罩長途", "環島重機", "臉+脖子防曬"]
  }
];

export default function App() {
  const [active, setActive] = useState("URBAN");
  const current = products.find(p => p.id === active)!;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-noto { font-family: 'Noto Sans TC', sans-serif; }
        .brush-bg { background: radial-gradient(ellipse at center, #151515 0%, #000000 70%); }
      `}</style>

      <header className="sticky top-0 z-50 bg-black border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 bg-white text-black font-bebas font-black text-[18px] flex items-center justify-center">Z</div>
            <span className="font-bebas text-[20px] tracking-[0.2em]">ZERO-TEC™</span>
            <span className="hidden lg:inline text-[11px] text-white/30 font-noto tracking-widest ml-6">歸零，才有靈感。零感，全神貫注。</span>
          </div>
          <div className="font-noto text-[11px] tracking-widest text-white/40">
            騎士頭套 · 戴頭套，安全帽更好穿脫，內襯不易弄髒。
          </div>
        </div>
      </header>

      <section className="brush-bg border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-[60px] md:py-[100px] relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <div className="inline-block border border-white/15 px-3 py-1 text-[10px] tracking-[0.3em] font-noto text-white/50 mb-8">【品牌定位】</div>
              <h1 className="font-noto font-black leading-[1.1] tracking-wide">
                <div className="text-[28px] md:text-[42px] text-white">歸零，才有靈感。</div>
                <div className="text-[28px] md:text-[42px] text-white mt-1">零感，全神貫注。</div>
              </h1>
              <div className="mt-6 text-[13px] text-white/60 font-noto tracking-widest">
                定位：騎士頭套，戴頭套，安全帽更好穿脫，內襯不易弄髒。
              </div>
              <div className="mt-12 font-noto">
                <div className="text-[11px] tracking-[0.3em] text-white/20 mb-4">【品牌故事 - 最終版】</div>
                <div className="space-y-3 text-[15px] leading-[1.8] text-white/90">
                  <p className="font-bold text-white text-[16px]">每天通勤，內襯都是汗。<br/>長途環島，脖子黑一截。<br/>ZERO-TEC把這些歸零。<br/>零感，全神貫注。</p>
                  <p className="text-white/60 pt-4 border-t border-white/10 mt-6">
                    每天通勤，安全帽內襯都是汗水油垢。<br/>
                    長途環島，半天就曬黑一截，脫安全帽頭套還被一起扯下來，在路邊喬半天。<br/>
                    我們受夠了，所以做了ZERO-TEC。
                  </p>
                  <p className="text-white/80">
                    Matrix-Lock™讓安全帽一戴就定位，不捲邊、不位移，脫帽時頭套不被帶走。<br/>
                    Zero-Friction™ 0.3mm隱形無痕，久戴忘了它的存在。<br/>
                    Opti-Space™ 3D眼周剪裁，視野無裁切，不壓眼鏡腳。
                  </p>
                  <p className="text-white/60">
                    短程通勤，Urban短版不包脖子，最透氣。<br/>
                    長途巡航，Touring長版全包覆到脖子，防曬、隔絕汗油一次歸零。<br/>
                    附加ZERO-TEC DRY™，防曬排汗只是順便，主業是讓你忘了頭套的存在。
                  </p>
                  <p className="font-black text-white pt-4 text-[16px]">歸零，才有靈感。ZERO-TEC™ 騎士頭套，零感，全神貫注。</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="font-bebas text-[280px] leading-[0.8] text-white/[0.04] select-none">Z<br/>T</div>
              <div className="absolute top-[40%] left-0 font-bebas text-[20px] tracking-[0.5em] text-white/10 -rotate-90 origin-left">V8 PURE BLACK</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-[60px]">
          <div className="text-[11px] tracking-[0.3em] text-white/20 font-noto mb-8">【核心技術】</div>
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/10">
            <div className="bg-black p-8">
              <div className="font-bebas text-[13px] tracking-[0.2em] text-white/30">① 零位移</div>
              <div className="font-noto font-black text-[18px] text-white mt-2">矩陣鎖定 Matrix-Lock™</div>
              <div className="font-noto text-[13px] text-white/70 mt-3 leading-relaxed">安全帽好穿脫，零滑移、零捲邊，脫帽不被帶走</div>
            </div>
            <div className="bg-black p-8">
              <div className="font-bebas text-[13px] tracking-[0.2em] text-white/30">② 零遮蔽</div>
              <div className="font-noto font-black text-[18px] text-white mt-2">全景視域 Opti-Space™</div>
              <div className="font-noto text-[13px] text-white/70 mt-3 leading-relaxed">眼周3D立體剪裁，視野無裁切、不壓眼鏡腳，戴眼鏡也OK</div>
            </div>
            <div className="bg-black p-8">
              <div className="font-bebas text-[13px] tracking-[0.2em] text-white/30">③ 零觸感</div>
              <div className="font-noto font-black text-[18px] text-white mt-2">無痕零感 Zero-Friction™</div>
              <div className="font-noto text-[13px] text-white/70 mt-3 leading-relaxed">0.3mm隱形厚度，4針6線Flatlock無痕，久戴無勒痕、無膚感</div>
            </div>
          </div>
          <div className="mt-[1px] bg-white/10 grid md:grid-cols-1">
            <div className="bg-[#0a0a0a] p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="font-bebas text-[13px] tracking-[0.2em] text-white/30">附加</div>
                <div className="font-noto font-black text-[18px] text-white mt-2">ZERO-TEC DRY™ 防曬排汗</div>
                <div className="font-noto text-[13px] text-white/70 mt-2">隔絕汗水油垢，安全帽內襯不易弄髒，好清洗。UPF50+防曬+排汗速乾</div>
              </div>
              <div className="font-noto text-[11px] text-white/30 tracking-widest border border-white/10 px-4 py-2">共通技術 · 全系列搭載</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-black border-b border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-[60px] md:py-[80px]">
          <div className="flex gap-2 mb-10">
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`font-bebas text-[20px] tracking-[0.15em] px-8 py-3 border transition-all ${
                  active === p.id ? "bg-white text-black border-white" : "bg-transparent text-white/30 border-white/15 hover:text-white/70 hover:border-white/30"
                }`}
              >
                {p.id}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
            <div className="border border-white/10 bg-[#050505] p-8 md:p-10 font-noto">
              <div className="font-bebas text-[12px] tracking-[0.3em] text-white/20 mb-2">{current.id} {current.tag}</div>
              <h2 className="font-black text-[20px] md:text-[24px] leading-tight text-white">{current.title}</h2>
              <div className="text-[13px] text-white/50 mt-3 tracking-wide">副標：{current.subtitle}</div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-[11px] tracking-[0.3em] text-white/20 mb-3">長文：</div>
                <p className="text-[13px] leading-[1.9] text-white/80">{current.longDesc}</p>
              </div>
              <div className="mt-6">
                <div className="text-[11px] tracking-[0.3em] text-white/20 mb-3">短文：</div>
                <p className="text-[12px] leading-[1.8] text-white/50">{current.shortDesc}</p>
              </div>
              <div className="mt-6">
                <div className="text-[11px] tracking-[0.3em] text-white/20 mb-3">蝦皮標題：</div>
                <p className="text-[11px] leading-[1.6] text-white/40 bg-white/[0.03] p-3 border border-white/5">{current.shopeeTitle}</p>
              </div>
              <div className="mt-8">
                <div className="text-[11px] tracking-[0.3em] text-white/20 mb-3">5點：</div>
                <div className="space-y-2">
                  {current.points.map((pt,i) => (
                    <div key={i} className="text-[12px] text-white/70 flex gap-2"><span className="text-white/20">{i+1}.</span>{pt}</div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex items-baseline gap-4">
                <span className="font-bebas text-[32px] text-white">{current.price}</span>
                <button className="ml-auto bg-white text-black font-black text-[12px] tracking-widest px-8 py-3 hover:bg-white/90">加入購物車</button>
              </div>
            </div>

            <div className="border border-white/10 bg-[#080808] p-1">
              <div className="bg-black h-full flex flex-col items-center justify-center p-10 text-center">
                <div className="font-bebas text-[140px] leading-none text-white">{current.id}</div>
                <div className="font-noto text-[11px] tracking-[0.4em] text-white/30 mt-2">{current.tag}</div>
                <div className="mt-10 w-full grid grid-cols-2 gap-[1px] bg-white/10 text-left">
                  {current.specs.map((s,i) => (
                    <div key={i} className="bg-[#0a0a0a] p-4 text-[11px] text-white/60 font-noto text-center tracking-widest">{s}</div>
                  ))}
                </div>
                <div className="mt-6 text-[10px] text-white/20 font-noto tracking-widest">共通：安全帽好穿脫零滑移零捲邊脫帽不被帶走 / 內襯不易弄髒好清洗 / 0.3mm無痕 / 4針6線 / 3D眼周不壓眼鏡 / ZERO-TEC DRY™</div>
              </div>
            </div>
          </div>

          <div className="mt-16 border border-white/10">
            <div className="bg-white text-black font-bebas text-[14px] tracking-[0.3em] px-6 py-3">比較表</div>
            <div className="grid md:grid-cols-3 bg-white/10 gap-[1px] font-noto text-[12px]">
              <div className="bg-black p-6">
                <div className="text-white/20 text-[11px] tracking-widest mb-3">項目</div>
                <div className="space-y-3 text-white/50">
                  <div>包覆</div><div>功能</div><div>適用</div><div>場合</div><div>防曬</div>
                </div>
              </div>
              <div className="bg-[#050505] p-6">
                <div className="font-black text-white text-[13px] mb-3">Urban短版：不包脖子</div>
                <div className="space-y-3 text-white/70">
                  <div>不包脖子</div><div>透氣</div><div>半罩通勤</div><div>夏季外送</div><div>臉部附加防曬</div>
                </div>
              </div>
              <div className="bg-[#050505] p-6">
                <div className="font-black text-white text-[13px] mb-3">Touring長版：包到脖子</div>
                <div className="space-y-3 text-white/70">
                  <div>包到脖子</div><div>防曬UPF50+</div><div>全罩長途</div><div>環島重機</div><div>臉+脖子防曬</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a0a] px-6 py-3 text-[11px] text-white/30 font-noto tracking-widest text-center">
              共通：安全帽好穿脫零滑移零捲邊脫帽不被帶走 / 內襯不易弄髒好清洗 / 0.3mm無痕 / 4針6線 / 3D眼周不壓眼鏡 / ZERO-TEC DRY™
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] py-8 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto flex justify-between text-[10px] font-noto text-white/15 tracking-widest">
          <span>© 2026 ZERO-TEC™ · zerotec.tw</span>
         </div>
      </footer>
    </div>
  );
}
