import { useState } from "react";

const products = [
  {
    id: "URBAN",
    name: "URBAN",
    tag: "SHORT / 短版透氣",
    price: "NT$ 490",
    originPrice: "NT$ 590",
    desc: "每天通勤，內襯都是汗。歸零，才有靈感。",
    longDesc: "短程通勤專用。短版不包脖子，最透氣。戴上忘了它的存在，安全帽內襯不再都是汗水油垢。",
    specs: [
      "Zero-Friction™ 0.3mm隱形無痕 / 久戴無勒痕、無膚感",
      "Matrix-Lock™ 矩陣鎖定 / 一戴就定位，不捲邊、不位移",
      "Opti-Space™ 3D眼周剪裁 / 視野無裁切，不壓眼鏡腳",
      "ZERO-TEC DRY™ / 隔絕汗水油垢，內襯不易弄髒，好清洗",
      "4針6線 Flatlock 無痕車縫 / 戴眼鏡也OK",
    ],
    highlight: "不包脖子 · 最透氣 · 通勤首選",
  },
  {
    id: "TOURING",
    name: "TOURING",
    tag: "LONG / 長版包覆",
    price: "NT$ 590",
    originPrice: "NT$ 690",
    desc: "長途環島，脖子黑一截。防曬、隔絕汗油一次歸零。",
    longDesc: "長途巡航專用。長版全包覆到脖子，UPF50+防曬，排汗速乾。脫帽時頭套不被帶走，不用在路邊喬半天。",
    specs: [
      "ZERO-TEC DRY™ UPF50+防曬+排汗速乾 / 防曬排汗只是順便，無感，才是本業",
      "Matrix-Lock™ 零位移 / 脫安全帽時頭套不被一起扯下來",
      "Opti-Space™ 全景視域 / 眼周3D立體剪裁，視野無遮蔽",
      "Zero-Friction™ 無痕零感 / 0.3mm隱形厚度，久戴忘了存在",
      "隔絕汗油，內襯不易弄髒 / 頭套好清洗，安全帽更乾淨",
    ],
    highlight: "全包覆到脖子 · 防曬 · 環島長征",
  },
];

export default function App() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active)!;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500;700&family=Syne:wght@600;700;800&display=swap');
        * { font-family: 'Syne', 'Noto Sans TC', sans-serif; }
      .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.06]">
        <div className="mx-auto max-w- px-6 md:px-10 h- flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded- bg-white flex items-center justify-center">
              <span className="font-black text- text-black leading-none">Z</span>
            </div>
            <div className="flex flex-col leading-none gap-">
              <span className="text- font-extrabold tracking-[0.08em]">ZERO-TEC™</span>
              <span className="mono text- font-medium tracking-[0.14em] text-white/60">EST. 2025 / TAIWAN</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="mono text- tracking-[0.14em] text-white/60 hover:text-white transition">PRODUCTS</a>
            <a href="#tech" className="mono text- tracking-[0.14em] text-white/60 hover:text-white transition">TECHNOLOGY</a>
            <a href="#story" className="mono text- tracking-[0.14em] text-white/60 hover:text-white transition">STORY</a>
          </nav>
          <div className="mono text- tracking-[0.2em] text-white/50 border border-white/10 px-3 py-1.5 rounded-full">零感 · 全神貫注</div>
        </div>
      </header>

      <section className="relative mx-auto max-w- px-6 md:px-10 pt-16 md:pt-32 pb-16 md:pb-24">
        <div className="absolute top-20 right-10 w- h- bg-white/[0.06] blur- rounded-full pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h- w-10 bg-white" />
            <span className="mono text- md:text- tracking-[0.22em] text-white/60 font-medium">騎士頭套 · 戴頭套，安全帽更好穿脫</span>
          </div>
          <h1 className="text- md:text- font-[800] leading-[0.9] tracking-[-0.04em]">
            歸零，才有<br />靈感。<br /><span className="text-white/25">零感，<br />全神貫注。</span>
          </h1>
          <div className="mt-10 max-w-">
            <p className="text- md:text- leading-[1.8] text-white/70">
              每天通勤，安全帽內襯都是汗水油垢。<br />長途環島，半天就曬黑一截，脫安全帽頭套還被一起扯下來，在路邊喬半天。<br />
              <span className="text-white">我們受夠了，所以做了 ZERO-TEC。</span>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <div className="mono text- border border-white/15 px-4 py-2 rounded-full text-white/60">安全帽好穿脫</div>
            <div className="mono text- border border-white/15 px-4 py-2 rounded-full text-white/60">內襯不易弄髒</div>
            <div className="mono text- border border-white/15 px-4 py-2 rounded-full text-white/60">UPF50+ 防曬</div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w- px-6 md:px-10 py-10 md:py-16">
        <div className="flex items-end justify-between mb-10 border-b border-white/[0.06] pb-6">
          <div>
            <span className="mono text- tracking-[0.22em] text-white/40">01 / COLLECTION</span>
            <h2 className="mt-3 text- md:text- font-bold tracking-[-0.03em] leading-none">兩種歸零的方式</h2>
          </div>
          <div className="hidden md:flex gap-2">
            {products.map((p) => (
              <button key={p.id} onClick={() => setActive(p.id)} className={`mono text- tracking-[0.14em] px-5 py-2.5 rounded-full border transition ${active === p.id? "bg-white text-black border-white" : "border-white/10 text-white/40 hover:text-white hover:border-white/20"}`}>{p.id}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10">
          <div className="relative rounded- bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] overflow-hidden min-h- flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-[#0a0a0a] rounded- border border-white/10 flex flex-col items-center justify-center gap-2">
              <span className="text- font-black leading-none tracking-[-0.08em] text-white">Z</span>
              <span className="mono text- tracking-[0.3em] text-white/40">{product.id}</span>
              <span className="mono text- tracking-[0.15em] text-white/30 mt-2 px-3 py-1 border border-white/10 rounded-full">{product.highlight}</span>
            </div>
            <div className="relative mt-auto p-8 flex justify-between items-end">
              <div>
                <div className="mono text- tracking-[0.2em] text-white/40 mb-2">ZERO-TEC™ / EST. 2025</div>
                <div className="text- font-bold tracking-[-0.02em]">戴頭套，安全帽更好穿脫。</div>
                <div className="mono text- text-white/30 mt-1">內襯不易弄髒 · 好清洗</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">↗</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded- border border-white/[0.08] bg-[#0a0a0a] p-7 md:p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text- md:text- font-bold tracking-[-0.02em]">{product.name}</h3>
                  <div className="mono text- tracking-[0.16em] text-white/50 mt-1.5">{product.tag}</div>
                </div>
                <div className="text-right">
                  <div className="mono text- font-bold text-white">{product.price}</div>
                  <div className="mono text- text-white/30 line-through">{product.originPrice}</div>
                </div>
              </div>
              <p className="text- leading-[1.7] text-white/80 mb-2 font-medium">{product.desc}</p>
              <p className="text- leading-[1.6] text-white/50 mb-7">{product.longDesc}</p>
              <div className="space-y-0 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex gap-3 py-4 items-start">
                    <span className="mt- w-1 h-1 rounded-full bg-white shrink-0" />
                    <p className="text- md:text- leading-[1.6] text-white/80 tracking-[0.01em]">{spec}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full h-12 rounded-full bg-white text-black mono text- tracking-[0.14em] font-medium hover:bg-white/90 transition">選購 {product.name} — 首發歸零價 {product.price}</button>
              <div className="mono text- text-white/30 text-center mt-3">首發歸零價，限時優惠至售完為止</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded- border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="mono text- tracking-[0.2em] text-white/30 mb-2">FOR</div>
                <div className="text- font-bold leading-[1.3]">{active === "URBAN"? "短程通勤" : "長途巡航"}<br />{active}</div>
                <div className="mono text- text-white/40 mt-2 leading-[1.5]">{active === "URBAN"? "不包脖子，最透氣" : "全包覆到脖子，防曬"}</div>
              </div>
              <div className="rounded- border border-white/10 bg-white/[0.04] p-5">
                <div className="mono text- tracking-[0.2em] text-white/40 mb-2">ZERO-TEC DRY™</div>
                <div className="text- font-bold leading-[1.3]">防曬排汗<br />只是順便</div>
                <div className="mono text- text-white/50 mt-2 leading-[1.5]">無感，才是本業</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex gap-2 mt-6">
          {products.map((p) => (
            <button key={p.id} onClick={() => setActive(p.id)} className={`flex-1 mono text- tracking-[0.14em] py-3 rounded-full border transition ${active === p.id? "bg-white text-black border-white" : "border-white/10 text-white/40"}`}>{p.id}</button>
          ))}
        </div>
      </section>

      <section id="tech" className="mx-auto max-w- px-6 md:px-10 py-16 md:py-24 border-t border-white/[0.06] mt-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          <div className="md:col-span-1">
            <span className="mono text- tracking-[0.22em] text-white/40">02 / TECHNOLOGY</span>
            <h2 className="mt-4 text- font-bold tracking-[-0.03em] leading-[0.95]">歸零的<br />三種方式<br /><span className="text-white/30">+ 一個順便</span></h2>
          </div>
          <div className="md:col-span-2 grid gap-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded- border border-white/[0.08] bg-[#0a0a0a] p-6">
                <div className="mono text- tracking-[0.2em] text-white/30 mb-4">01 / 零位移</div>
                <h4 className="text- font-bold mb-2">Matrix-Lock™ 矩陣鎖定</h4>
                <p className="text- leading-[1.7] text-white/50">安全帽好穿脫，零滑移、零捲邊，脫帽不被帶走。不用在路邊喬半天。</p>
              </div>
              <div className="rounded- border border-white/[0.08] bg-[#0a0a0a] p-6">
                <div className="mono text- tracking-[0.2em] text-white/30 mb-4">02 / 零遮蔽</div>
                <h4 className="text- font-bold mb-2">Opti-Space™ 全景視域</h4>
                <p className="text- leading-[1.7] text-white/50">眼周3D立體剪裁，視野無裁切、不壓眼鏡腳。戴眼鏡也OK。</p>
              </div>
              <div className="rounded- border border-white/[0.08] bg-[#0a0a0a] p-6">
                <div className="mono text- tracking-[0.2em] text-white/30 mb-4">03 / 零觸感</div>
                <h4 className="text- font-bold mb-2">Zero-Friction™ 無痕零感</h4>
                <p className="text- leading-[1.7] text-white/50">0.3mm隱形厚度，4針6線Flatlock無痕。久戴無勒痕、無膚感。</p>
              </div>
            </div>
            <div className="rounded- border border-white/10 bg-white/[0.03] p-6 md:p-7 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded- bg-white text-black flex items-center justify-center font-black">+</div>
                <div>
                  <div className="text- font-bold">ZERO-TEC DRY™ 防曬排汗</div>
                  <div className="mono text- text-white/40 mt-1">附加功能，無感，才是本業</div>
                </div>
              </div>
              <div className="mono text- leading-[1.6] text-white/40 max-w-">隔絕汗水油垢，安全帽內襯不易弄髒，好清洗。UPF50+防曬+排汗速乾，防曬排汗只是順便。</div>
            </div>
            <div id="story" className="rounded- border border-white/[0.06] bg-[#0a0a0a] p-7 mt-2">
              <div className="mono text- tracking-[0.2em] text-white/30 mb-4">BRAND STORY</div>
              <p className="text- leading-[1.9] text-white/70">
                每天通勤，內襯都是汗。<br />長途環島，脖子黑一截。<br />
                <span className="text-white font-bold">ZERO-TEC把這些歸零。零感，全神貫注。</span><br /><br />
                <span className="text-white/40">每天通勤，安全帽內襯都是汗水油垢。長途環島，半天就曬黑一截，脫安全帽頭套還被一起扯下來，在路邊喬半天。我們受夠了，所以做了ZERO-TEC。附加ZERO-TEC DRY™，防曬排汗只是順便，無感，才是本業。歸零，才有靈感。ZERO-TEC™ 騎士頭套，零感，全神貫注。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] mt-10">
        <div className="mx-auto max-w- px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded- bg-white flex items-center justify-center"><span className="font-black text- text-black">Z</span></div>
              <span className="text- font-bold">ZERO-TEC™</span>
              <span className="mono text- text-white/30 px-2 py-0.5 rounded-full border border-white/10">騎士頭套</span>
            </div>
            <div className="mt-4 mono text- text-white/40 leading-[1.6]">歸零，才有靈感。零感，全神貫注。<br />EST. 2025 / TAIWAN<br />© ZERO-TEC™</div>
          </div>
          <div className="mono text- tracking-[0.14em] text-white/20">戴頭套，安全帽更好穿脫 · 內襯不易弄髒 · 好清洗 · UPF50+ 防曬</div>
        </div>
      </footer>
    </div>
  );
}
