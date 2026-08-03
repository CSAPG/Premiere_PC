/* ===== pre-icons.js — Icônes des séquences Première EDS =====
   Chaque icône reprend l'illustration animée du header de la fiche
   de cours correspondante (même logique que ter-icons.js).
   Le paramètre "suffix" permet d'avoir plusieurs instances de la
   même icône sur une page sans collision d'animation CSS.
*/

function iconLumiereCouleurs(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 8s ease-in-out infinite}
        .hicon-add-${suffix}{animation-delay:0s}
        .hicon-sub-${suffix}{animation-delay:4s}
        @keyframes hiconFade-${suffix}{
          0%{opacity:1} 45%{opacity:1} 50%{opacity:0} 95%{opacity:0} 100%{opacity:1}
        }
      </style>
      <g class="hicon-scene-${suffix} hicon-add-${suffix}">
        <rect width="200" height="130" rx="10" fill="#0a0a0f"/>
        <circle cx="82" cy="56" r="26" fill="#ff2626" style="mix-blend-mode:screen"/>
        <circle cx="118" cy="56" r="26" fill="#20e050" style="mix-blend-mode:screen"/>
        <circle cx="100" cy="82" r="26" fill="#2050ff" style="mix-blend-mode:screen"/>
      </g>
      <g class="hicon-scene-${suffix} hicon-sub-${suffix}">
        <rect width="200" height="130" rx="10" fill="#f2f2f2"/>
        <circle cx="82" cy="56" r="26" fill="#20c8d8" style="mix-blend-mode:multiply"/>
        <circle cx="118" cy="56" r="26" fill="#e030d0" style="mix-blend-mode:multiply"/>
        <circle cx="100" cy="82" r="26" fill="#f5e02a" style="mix-blend-mode:multiply"/>
      </g>
    </svg>`;
}

function iconModelesOndulatoireParticulaire(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <defs>
        <linearGradient id="hiconGrad-${suffix}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8b00ff"/>
          <stop offset="8%" stop-color="#4b00ff"/>
          <stop offset="16%" stop-color="#0022ff"/>
          <stop offset="24%" stop-color="#0080ff"/>
          <stop offset="32%" stop-color="#00c8e0"/>
          <stop offset="40%" stop-color="#00d89a"/>
          <stop offset="48%" stop-color="#23d020"/>
          <stop offset="56%" stop-color="#a0e000"/>
          <stop offset="64%" stop-color="#f5e000"/>
          <stop offset="72%" stop-color="#ffb000"/>
          <stop offset="80%" stop-color="#ff6a00"/>
          <stop offset="88%" stop-color="#ff2a00"/>
          <stop offset="96%" stop-color="#b00000"/>
          <stop offset="100%" stop-color="#5a0000"/>
        </linearGradient>
        <style>
          .hicon-lines-${suffix}{animation:hiconLinesFade-${suffix} 8s ease-in-out infinite}
          .hicon-label-cont-${suffix}{animation:hiconContFade-${suffix} 8s ease-in-out infinite}
          .hicon-label-abs-${suffix}{animation:hiconLinesFade-${suffix} 8s ease-in-out infinite}
          @keyframes hiconLinesFade-${suffix}{
            0%,30%{opacity:0} 42%,86%{opacity:1} 98%,100%{opacity:0}
          }
          @keyframes hiconContFade-${suffix}{
            0%,30%{opacity:1} 42%,86%{opacity:0} 98%,100%{opacity:1}
          }
        </style>
      </defs>
      <rect width="200" height="130" rx="10" fill="#101020"/>
      <rect x="14" y="46" width="172" height="38" rx="4" fill="url(#hiconGrad-${suffix})"/>
      <g class="hicon-lines-${suffix}">
        <rect x="31" y="46" width="3.4" height="38" fill="#0a0a0f" opacity=".9"/>
        <rect x="63" y="46" width="2" height="38" fill="#0a0a0f" opacity=".62"/>
        <rect x="82" y="46" width="2.4" height="38" fill="#0a0a0f" opacity=".78"/>
        <rect x="122" y="46" width="3.6" height="38" fill="#0a0a0f" opacity=".92"/>
        <rect x="161" y="46" width="2" height="38" fill="#0a0a0f" opacity=".58"/>
      </g>
      <text class="hicon-label-cont-${suffix}" x="100" y="104" font-family="Nunito, sans-serif" font-size="11" fill="#cfd6e6" text-anchor="middle">spectre continu</text>
      <text class="hicon-label-abs-${suffix}" x="100" y="104" font-family="Nunito, sans-serif" font-size="11" fill="#cfd6e6" text-anchor="middle">raies d'absorption</text>
    </svg>`;
}

function iconSeq00(suffix) {
  return `
    <div style="display:inline-block;position:relative;width:48px;height:72px;">
      <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:44px;height:44px;border-radius:50%;background:radial-gradient(circle, rgba(250,199,117,0.55) 0%, transparent 70%);animation:bulb-glow-pulse-${suffix} 2.6s ease-in-out infinite;"></div>
      <svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:relative;">
        <style>
          .bulb-glass-${suffix}{fill:#f1f5f9;stroke:#cbd5e1;stroke-width:2;animation:bulb-glass-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-glass-blink-${suffix}{0%,100%{fill:#f1f5f9;stroke:#cbd5e1}50%{fill:#FFE9A8;stroke:#FAC775}}
          .bulb-filament-text-${suffix}{font-family:Arial,sans-serif;font-weight:700;font-size:8px;text-anchor:middle;fill:#cbd5e1;animation:bulb-filament-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-filament-blink-${suffix}{0%,100%{fill:#cbd5e1}50%{fill:#e8783a}}
          .bulb-rays-${suffix}{stroke:#FAC775;stroke-width:3;stroke-linecap:round;opacity:0;animation:bulb-rays-blink-${suffix} 2.6s ease-in-out infinite}
          @keyframes bulb-rays-blink-${suffix}{0%,35%,100%{opacity:0}50%{opacity:1}}
          @keyframes bulb-glow-pulse-${suffix}{0%,100%{opacity:.15;transform:translateX(-50%) scale(.85)}50%{opacity:1;transform:translateX(-50%) scale(1.15)}}
        </style>
        <g class="bulb-rays-${suffix}">
          <line x1="30" y1="2" x2="30" y2="8"/>
          <line x1="6" y1="10" x2="13" y2="16"/>
          <line x1="54" y1="10" x2="47" y2="16"/>
          <line x1="0" y1="32" x2="8" y2="32"/>
          <line x1="60" y1="32" x2="52" y2="32"/>
        </g>
        <ellipse class="bulb-glass-${suffix}" cx="30" cy="32" rx="19" ry="25"/>
        <text class="bulb-filament-text-${suffix}" x="30" y="35">eureka</text>
        <rect fill="#94a3b8" x="24" y="54" width="12" height="6"/>
        <rect fill="#64748b" x="23" y="60" width="14" height="4"/>
        <rect fill="#64748b" x="23" y="65" width="14" height="4"/>
        <rect fill="#475569" x="24" y="70" width="12" height="6" rx="2"/>
      </svg>
    </div>`;
}

function iconSeq03(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 12s ease-in-out infinite}
        .hicon-add-${suffix}{animation-delay:0s}
        .hicon-sub-${suffix}{animation-delay:4s}
        .hicon-beer-${suffix}{animation-delay:8s}
        @keyframes hiconFade-${suffix}{
          0%{opacity:1} 30%{opacity:1} 34%{opacity:0} 96%{opacity:0} 100%{opacity:1}
        }
      </style>
      <g class="hicon-scene-${suffix} hicon-add-${suffix}">
        <rect width="200" height="130" rx="10" fill="#0a0a0f"/>
        <circle cx="60" cy="65" r="30" fill="none" stroke="#5B8FB9" stroke-width="2.5"/>
        <circle cx="60" cy="65" r="3" fill="#E8783A"/>
        <circle cx="78" cy="50" r="6" fill="#3A8A6E"/>
        <circle cx="42" cy="80" r="6" fill="#C0392B"/>
        <circle cx="80" cy="82" r="6" fill="#E8783A"/>
        <text x="112" y="58" fill="#fff" font-family="DM Mono, monospace" font-size="13" font-weight="700">n = m/M</text>
        <text x="112" y="76" fill="#9fb3c8" font-family="DM Mono, monospace" font-size="11">mol</text>
      </g>
      <g class="hicon-scene-${suffix} hicon-sub-${suffix}">
        <rect width="200" height="130" rx="10" fill="#0a0a0f"/>
        <line x1="10" y1="65" x2="70" y2="65" stroke="#f5d76b" stroke-width="3"/>
        <rect x="72" y="46" width="30" height="38" rx="2" fill="#E8783A" opacity="0.55"/>
        <line x1="102" y1="65" x2="150" y2="65" stroke="#f5d76b" stroke-width="1.4" opacity="0.6"/>
        <line x1="152" y1="30" x2="185" y2="20" stroke="#7c3aed" stroke-width="1.6"/>
        <line x1="152" y1="30" x2="185" y2="32" stroke="#2563eb" stroke-width="1.6"/>
        <line x1="152" y1="30" x2="185" y2="44" stroke="#22c55e" stroke-width="1.6"/>
        <line x1="152" y1="30" x2="185" y2="56" stroke="#dc2626" stroke-width="1.6"/>
        <text x="60" y="100" fill="#fff" font-family="DM Mono, monospace" font-size="13" font-weight="700">A = ε·l·c</text>
      </g>
      <g class="hicon-scene-${suffix} hicon-beer-${suffix}">
        <rect width="200" height="130" rx="10" fill="#0a0a0f"/>
        <line x1="30" y1="15" x2="30" y2="110" stroke="#5B8FB9" stroke-width="1.5"/>
        <line x1="30" y1="110" x2="185" y2="110" stroke="#5B8FB9" stroke-width="1.5"/>
        <line x1="30" y1="110" x2="150" y2="30" stroke="#E8783A" stroke-width="2.5"/>
        <circle cx="55" cy="94" r="4" fill="#3A8A6E"/>
        <circle cx="80" cy="78" r="4" fill="#3A8A6E"/>
        <circle cx="105" cy="62" r="4" fill="#3A8A6E"/>
        <circle cx="130" cy="46" r="4" fill="#3A8A6E"/>
        <text x="10" y="20" fill="#9fb3c8" font-family="DM Mono, monospace" font-size="11">A</text>
        <text x="165" y="123" fill="#9fb3c8" font-family="DM Mono, monospace" font-size="11">C</text>
        <text x="55" y="20" fill="#fff" font-family="DM Mono, monospace" font-size="12" font-weight="700">A = ε·ℓ·c</text>
      </g>
    </svg>`;
}

function iconSeq04(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <circle cx="60" cy="65" r="24" fill="#2D5F8A">
        <animate attributeName="fill" values="#2D5F8A;#2D5F8A;#5B8FB9;#5B8FB9;#2D5F8A" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
      </circle>
      <text x="60" y="69" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="10" fill="#fff">
        <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
        Cu
      </text>
      <text x="60" y="69" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="9" fill="#fff">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
        Cu²⁺
      </text>
      <circle cx="140" cy="65" r="24" fill="#7B4FA6">
        <animate attributeName="fill" values="#7B4FA6;#7B4FA6;#8a93a8;#8a93a8;#7B4FA6" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
      </circle>
      <text x="140" y="69" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="10" fill="#fff">
        <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
        Ag⁺
      </text>
      <text x="140" y="69" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="10" fill="#fff">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.4;0.6;0.95;1" dur="2.6s" repeatCount="indefinite"/>
        Ag
      </text>
      <circle cx="95" cy="52" r="6" fill="#E8783A">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M -35,0 Q 0,-18 45,0"/>
      </circle>
    </svg>`;
}

function iconSeq05(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <rect x="15" y="25" width="111" height="75" rx="4" fill="none" stroke="#5B8FB9" stroke-width="2"/>
      <rect x="18" y="28" width="100" height="69" fill="#DCEAF5">
        <animate attributeName="width" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="100.0;80.7;49.3;46.0;44.5;44.0;44.5;46.0;49.3;80.7;100.0"/>
      </rect>
      <circle r="3.2" fill="#2D5F8A">
        <animate attributeName="cx" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="35.8;32.9;28.2;29.6;25.6;29.3;25.6;29.6;28.2;32.9;35.8"/>
        <animate attributeName="cy" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="62.0;62.0;62.0;62.4;61.6;62.4;61.6;62.4;62.0;62.0;62.0"/>
      </circle>
      <circle r="3" fill="#5B8FB9">
        <animate attributeName="cx" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="54.2;47.4;36.5;37.2;32.9;36.5;32.9;37.2;36.5;47.4;54.2"/>
        <animate attributeName="cy" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="62.0;62.0;62.0;62.9;61.1;62.9;61.1;62.9;62.0;62.0;62.0"/>
      </circle>
      <circle r="3.4" fill="#2D5F8A">
        <animate attributeName="cx" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="72.6;62.0;44.7;44.8;40.2;43.7;40.2;44.8;44.7;62.0;72.6"/>
        <animate attributeName="cy" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="62.0;62.0;62.0;63.2;60.8;63.2;60.8;63.2;62.0;62.0;62.0"/>
      </circle>
      <circle r="3" fill="#5B8FB9">
        <animate attributeName="cx" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="88.2;74.3;51.7;51.3;46.4;49.8;46.4;51.3;51.7;74.3;88.2"/>
        <animate attributeName="cy" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="62.0;62.0;62.0;62.8;61.2;62.8;61.2;62.8;62.0;62.0;62.0"/>
      </circle>
      <circle r="3.2" fill="#2D5F8A">
        <animate attributeName="cx" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="103.0;86.0;58.3;57.4;52.2;55.6;52.2;57.4;58.3;86.0;103.0"/>
        <animate attributeName="cy" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="62.0;62.0;62.0;62.3;61.7;62.3;61.7;62.3;62.0;62.0;62.0"/>
      </circle>
      <rect y="22" width="8" height="81" fill="#2D5F8A" rx="1">
        <animate attributeName="x" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="118.0;98.7;67.3;64.0;62.5;62.0;62.5;64.0;67.3;98.7;118.0"/>
      </rect>
      <text x="70" y="18" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="9" fill="#2D5F8A">Volume comprimé</text>
      <circle cx="168" cy="55" r="24" fill="#fff" stroke="#2D5F8A" stroke-width="3"/>
      <text x="168" y="52" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="8" fill="#2D5F8A">P</text>
      <line x1="168" y1="55" x2="168" y2="37" stroke="#E8783A" stroke-width="2.5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" dur="5s" repeatCount="indefinite"
          keyTimes="0;0.2;0.4;0.44;0.47;0.5;0.53;0.56;0.6;0.8;1.0"
          values="-32.0 168 55;-6.5 168 55;35.0 168 55;39.4 168 55;41.3 168 55;42.0 168 55;41.3 168 55;39.4 168 55;35.0 168 55;-6.5 168 55;-32.0 168 55"/>
      </line>
      <text x="168" y="105" text-anchor="middle" font-family="Nunito" font-weight="700" font-size="8" fill="#5A6B7A">Pression</text>
    </svg>`;
}

function iconSeq06(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <rect x="20" y="14" width="160" height="9" rx="4.5" fill="#fff" stroke="#B8D4EC" stroke-width="1.5"/>
      <rect x="21" y="15" height="7" rx="3.5" fill="#3A8A6E">
        <animate attributeName="width" dur="6s" repeatCount="indefinite" keyTimes="0;0.42;0.5;0.9;1" values="0;120;120;120;0"/>
      </rect>
      <text x="100" y="10" text-anchor="middle" font-family="Outfit" font-weight="800" font-size="7" fill="#5A6B7A">avancement x</text>
      <rect x="86" y="34" width="9" height="34" fill="#fff" stroke="#5B8FB9" stroke-width="1.5"/>
      <rect x="87.2" y="35" width="6.6" height="26" fill="#E8783A"/>
      <polygon points="86,68 95,68 90.5,76" fill="#5B8FB9"/>
      <circle cx="90.5" cy="82" r="2.6" fill="#E8783A">
        <animate attributeName="cy" values="80;104;80" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.65;0.66;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <defs>
        <clipPath id="hiconFlaskClip-${suffix}">
          <path d="M85,90 L95,90 L95,102 L120,119 Q124,123 119,123 L61,123 Q56,123 60,119 L85,102 Z"/>
        </clipPath>
      </defs>
      <path d="M85,90 L95,90 L95,102 L120,119 Q124,123 119,123 L61,123 Q56,123 60,119 L85,102 Z" fill="none" stroke="#5B8FB9" stroke-width="2.2"/>
      <g clip-path="url(#hiconFlaskClip-${suffix})">
        <rect x="50" y="104" width="80" height="21" fill="#E8783A">
          <animate attributeName="fill" dur="6s" repeatCount="indefinite" keyTimes="0;0.42;0.5;0.9;1" values="#E8783A;#E8783A;#F5F7FA;#F5F7FA;#E8783A"/>
        </rect>
      </g>
    </svg>`;
}

function iconSeq07(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 6s ease-in-out infinite}
        .hicon-a-${suffix}{animation-delay:0s}
        .hicon-b-${suffix}{animation-delay:3s}
        @keyframes hiconFade-${suffix}{0%{opacity:1}42%{opacity:1}50%{opacity:0}92%{opacity:0}100%{opacity:1}}
      </style>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g class="hicon-scene-${suffix} hicon-a-${suffix}">
        <circle cx="100" cy="65" r="5" fill="#C0392B"/>
        <text x="100" y="52" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#C0392B">q &gt; 0</text>
        <g stroke="#5B8FB9" stroke-width="1.3" fill="none" opacity=".85">
          <path d="M100,65 L100,20" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L100,110" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L145,65" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L55,65" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L132,33" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L68,33" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L132,97" marker-end="url(#ar1-${suffix})"/>
          <path d="M100,65 L68,97" marker-end="url(#ar1-${suffix})"/>
        </g>
      </g>
      <g class="hicon-scene-${suffix} hicon-b-${suffix}">
        <circle cx="70" cy="65" r="6" fill="#2D5F8A"/>
        <circle cx="130" cy="65" r="6" fill="#2D5F8A"/>
        <line x1="76" y1="65" x2="124" y2="65" stroke="#E8783A" stroke-width="2"/>
        <path d="M76,58 L92,58" stroke="#E8783A" stroke-width="2" marker-end="url(#ar2-${suffix})"/>
        <path d="M124,72 L108,72" stroke="#E8783A" stroke-width="2" marker-end="url(#ar2-${suffix})"/>
        <text x="100" y="30" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="700" fill="#2D5F8A">Interaction gravitationnelle</text>
      </g>
      <defs>
        <marker id="ar1-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#5B8FB9"/></marker>
        <marker id="ar2-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#E8783A"/></marker>
      </defs>
    </svg>`;
}

function iconSeq08(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 6s ease-in-out infinite}
        .hicon-a-${suffix}{animation-delay:0s}
        .hicon-b-${suffix}{animation-delay:3s}
        @keyframes hiconFade-${suffix}{0%{opacity:1}42%{opacity:1}50%{opacity:0}92%{opacity:0}100%{opacity:1}}
      </style>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g class="hicon-scene-${suffix} hicon-a-${suffix}">
        <path d="M25,95 C55,90 65,55 95,50 C130,44 145,60 175,35" fill="none" stroke="#2D5F8A" stroke-width="1.6" stroke-dasharray="1 5" opacity=".7"/>
        <circle cx="25" cy="95" r="3" fill="#1A2A3A"/>
        <circle cx="70" cy="58" r="3" fill="#1A2A3A"/>
        <circle cx="120" cy="45" r="3" fill="#1A2A3A"/>
        <circle cx="175" cy="35" r="3" fill="#1A2A3A"/>
        <path d="M25,95 L45,80" stroke="#C0392B" stroke-width="2" marker-end="url(#arh1-${suffix})"/>
        <path d="M70,58 L95,48" stroke="#C0392B" stroke-width="2" marker-end="url(#arh1-${suffix})"/>
        <path d="M120,45 L150,33" stroke="#C0392B" stroke-width="2" marker-end="url(#arh1-${suffix})"/>
        <text x="100" y="18" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Chronophotographie</text>
      </g>
      <g class="hicon-scene-${suffix} hicon-b-${suffix}">
        <text x="100" y="18" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#E8783A">Construction de Δv</text>
        <path d="M70,95 L120,60" stroke="#C0392B" stroke-width="2" marker-end="url(#arh2-${suffix})"/>
        <path d="M120,60 L142,95" stroke="#C0392B" stroke-width="2" marker-end="url(#arh2-${suffix})"/>
        <path d="M70,95 L142,95" stroke="#3A8A6E" stroke-width="2.4" marker-end="url(#arh3-${suffix})"/>
        <text x="92" y="72" font-size="8" font-family="DM Mono,monospace" fill="#C0392B">v1</text>
        <text x="128" y="82" font-size="8" font-family="DM Mono,monospace" fill="#C0392B">−v0</text>
        <text x="95" y="112" font-size="8" font-family="DM Mono,monospace" fill="#3A8A6E">Δv</text>
      </g>
      <defs>
        <marker id="arh1-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#C0392B"/></marker>
        <marker id="arh2-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#C0392B"/></marker>
        <marker id="arh3-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#3A8A6E"/></marker>
      </defs>
    </svg>`;
}

function iconSeq09(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 9s ease-in-out infinite}
        .hicon-a-${suffix}{animation-delay:0s}
        .hicon-b-${suffix}{animation-delay:3s}
        .hicon-c-${suffix}{animation-delay:6s}
        @keyframes hiconFade-${suffix}{0%{opacity:1}30%{opacity:1}36%{opacity:0}94%{opacity:0}100%{opacity:1}}
      </style>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g class="hicon-scene-${suffix} hicon-a-${suffix}">
        <text x="100" y="20" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Solide ionique NaCl</text>
        <g font-family="Outfit,sans-serif" font-size="9" font-weight="800">
          <circle cx="55" cy="45" r="9" fill="#3A8A6E"/><text x="55" y="48" text-anchor="middle" fill="#fff">−</text>
          <circle cx="85" cy="45" r="6" fill="#E8783A"/><text x="85" y="48" text-anchor="middle" fill="#fff">+</text>
          <circle cx="115" cy="45" r="9" fill="#3A8A6E"/><text x="115" y="48" text-anchor="middle" fill="#fff">−</text>
          <circle cx="145" cy="45" r="6" fill="#E8783A"/><text x="145" y="48" text-anchor="middle" fill="#fff">+</text>
          <circle cx="55" cy="75" r="6" fill="#E8783A"/><text x="55" y="78" text-anchor="middle" fill="#fff">+</text>
          <circle cx="85" cy="75" r="9" fill="#3A8A6E"/><text x="85" y="78" text-anchor="middle" fill="#fff">−</text>
          <circle cx="115" cy="75" r="6" fill="#E8783A"/><text x="115" y="78" text-anchor="middle" fill="#fff">+</text>
          <circle cx="145" cy="75" r="9" fill="#3A8A6E"/><text x="145" y="78" text-anchor="middle" fill="#fff">−</text>
          <circle cx="55" cy="105" r="9" fill="#3A8A6E"/><text x="55" y="108" text-anchor="middle" fill="#fff">−</text>
          <circle cx="85" cy="105" r="6" fill="#E8783A"/><text x="85" y="108" text-anchor="middle" fill="#fff">+</text>
          <circle cx="115" cy="105" r="9" fill="#3A8A6E"/><text x="115" y="108" text-anchor="middle" fill="#fff">−</text>
          <circle cx="145" cy="105" r="6" fill="#E8783A"/><text x="145" y="108" text-anchor="middle" fill="#fff">+</text>
        </g>
      </g>
      <g class="hicon-scene-${suffix} hicon-b-${suffix}">
        <text x="100" y="20" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Molécule d'eau polaire</text>
        <circle cx="100" cy="65" r="13" fill="#C0392B"/><text x="100" y="69" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">O</text>
        <circle cx="72" cy="90" r="8" fill="#5B8FB9"/><text x="72" y="94" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <circle cx="128" cy="90" r="8" fill="#5B8FB9"/><text x="128" y="94" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <line x1="100" y1="65" x2="72" y2="90" stroke="#7B4FA6" stroke-width="2.5"/>
        <line x1="100" y1="65" x2="128" y2="90" stroke="#7B4FA6" stroke-width="2.5"/>
        <text x="80" y="60" font-size="9" fill="#C0392B" font-weight="800">δ−</text>
        <text x="68" y="105" font-size="9" fill="#5B8FB9" font-weight="800">δ+</text>
        <text x="124" y="105" font-size="9" fill="#5B8FB9" font-weight="800">δ+</text>
        <path d="M100,65 L100,110" stroke="#E8783A" stroke-width="2" marker-end="url(#ar3-09-${suffix})"/>
        <text x="105" y="118" font-size="8" fill="#E8783A" font-weight="700">p</text>
      </g>
      <g class="hicon-scene-${suffix} hicon-c-${suffix}">
        <text x="100" y="20" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Extraction liquide-liquide</text>
        <defs>
          <clipPath id="hiconFunnelClip-${suffix}">
            <path d="M62,46 C62,36 138,36 138,46 C138,64 112,70 106,86 L106,103 L94,103 L94,86 C88,70 62,64 62,46 Z"/>
          </clipPath>
        </defs>
        <g clip-path="url(#hiconFunnelClip-${suffix})">
          <rect x="55" y="34" width="90" height="24" fill="#B87FD9"/>
          <rect x="55" y="58" width="90" height="55" fill="#4FB3BF"/>
        </g>
        <path d="M62,46 C62,36 138,36 138,46 C138,64 112,70 106,86 L106,103 L94,103 L94,86 C88,70 62,64 62,46 Z" fill="none" stroke="#5A6B7A" stroke-width="1.6" stroke-linejoin="round"/>
        <line x1="63" y1="58" x2="137" y2="58" stroke="#fff" stroke-width="1" opacity="0.5"/>
        <rect x="90" y="24" width="20" height="13" fill="#E8F1F8" stroke="#5A6B7A" stroke-width="1.6"/>
        <ellipse cx="100" cy="24" rx="10" ry="2.4" fill="#DDE3EC" stroke="#5A6B7A" stroke-width="1.3"/>
        <rect x="86" y="103" width="28" height="6" rx="2" fill="#DDE3EC" stroke="#5A6B7A" stroke-width="1"/>
        <circle cx="100" cy="106" r="2.6" fill="#C0392B"/>
        <text x="100" y="122" text-anchor="middle" font-size="7.5" font-family="Nunito,sans-serif" font-weight="700" fill="#5A6B7A">liquides non miscibles</text>
      </g>
      <defs>
        <marker id="ar3-09-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#E8783A"/></marker>
      </defs>
    </svg>`;
}

function iconSeq10(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 6s ease-in-out infinite}
        .hicon-a-${suffix}{animation-delay:0s}
        .hicon-b-${suffix}{animation-delay:3s}
        @keyframes hiconFade-${suffix}{0%{opacity:1}42%{opacity:1}50%{opacity:0}92%{opacity:0}100%{opacity:1}}
      </style>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g class="hicon-scene-${suffix} hicon-a-${suffix}">
        <text x="100" y="20" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Schéma de Lewis : NH₃</text>
        <line x1="100" y1="70" x2="60" y2="100" stroke="#5A6B7A" stroke-width="2.5"/>
        <line x1="100" y1="70" x2="140" y2="100" stroke="#5A6B7A" stroke-width="2.5"/>
        <line x1="100" y1="70" x2="100" y2="112" stroke="#5A6B7A" stroke-width="2.5"/>
        <circle cx="100" cy="70" r="15" fill="#2D5F8A"/><text x="100" y="74" text-anchor="middle" font-size="11" fill="#fff" font-weight="800">N</text>
        <circle cx="60" cy="100" r="10" fill="#5B8FB9"/><text x="60" y="104" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <circle cx="140" cy="100" r="10" fill="#5B8FB9"/><text x="140" y="104" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <circle cx="100" cy="112" r="10" fill="#5B8FB9"/><text x="100" y="116" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <circle cx="93" cy="42" r="2.6" fill="#E8783A"/><circle cx="107" cy="42" r="2.6" fill="#E8783A"/>
        <text x="100" y="34" text-anchor="middle" font-size="7.5" fill="#a35719" font-weight="700">doublet non liant</text>
      </g>
      <g class="hicon-scene-${suffix} hicon-b-${suffix}">
        <text x="100" y="20" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Molécule d'eau polaire</text>
        <circle cx="100" cy="65" r="13" fill="#C0392B"/><text x="100" y="69" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">O</text>
        <circle cx="72" cy="90" r="8" fill="#5B8FB9"/><text x="72" y="94" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <circle cx="128" cy="90" r="8" fill="#5B8FB9"/><text x="128" y="94" text-anchor="middle" font-size="9" fill="#fff" font-weight="800">H</text>
        <line x1="100" y1="65" x2="72" y2="90" stroke="#7B4FA6" stroke-width="2.5"/>
        <line x1="100" y1="65" x2="128" y2="90" stroke="#7B4FA6" stroke-width="2.5"/>
        <text x="80" y="60" font-size="9" fill="#C0392B" font-weight="800">δ−</text>
        <text x="68" y="105" font-size="9" fill="#5B8FB9" font-weight="800">δ+</text>
        <text x="124" y="105" font-size="9" fill="#5B8FB9" font-weight="800">δ+</text>
        <path d="M100,65 L100,110" stroke="#E8783A" stroke-width="2" marker-end="url(#ar3-10-${suffix})"/>
        <text x="105" y="118" font-size="8" fill="#E8783A" font-weight="700">p</text>
      </g>
      <defs>
        <marker id="ar3-10-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#E8783A"/></marker>
      </defs>
    </svg>`;
}

function iconSeq11(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g>
        <text x="100" y="18" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Conservation de Em</text>
        <path id="trackSeq11-${suffix}" d="M30,115 Q40,30 60,30 Q80,30 90,80 Q100,110 110,80 Q120,30 140,30 Q160,30 170,115 Q140,128 100,128 Q60,128 30,115 Z" fill="none" stroke="#2D5F8A" stroke-width="2" opacity=".55"/>
        <g>
          <rect x="-7" y="-5.5" width="14" height="8" rx="2" fill="#C0392B"/>
          <circle cx="-4" cy="3.5" r="2" fill="#1A2A3A"/>
          <circle cx="4" cy="3.5" r="2" fill="#1A2A3A"/>
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" calcMode="linear" keyPoints="0;0.15;0.35;0.5;0.65;1" keyTimes="0;0.30;0.45;0.75;0.85;1">
            <mpath href="#trackSeq11-${suffix}"/>
          </animateMotion>
        </g>
      </g>
    </svg>`;
}

function iconSeq14(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        .hicon-scene-${suffix}{opacity:0;animation:hiconFade-${suffix} 6s ease-in-out infinite}
        .hicon-a-${suffix}{animation-delay:0s}
        .hicon-b-${suffix}{animation-delay:3s}
        @keyframes hiconFade-${suffix}{0%{opacity:1}42%{opacity:1}50%{opacity:0}92%{opacity:0}100%{opacity:1}}
        .wave-scroll-${suffix}{animation:waveScroll-${suffix} 1.6s linear infinite}
        @keyframes waveScroll-${suffix}{from{transform:translateX(0)}to{transform:translateX(80px)}}
        .wave-point-${suffix}{animation:wavePointBob-${suffix} 1.6s linear infinite}
        @keyframes wavePointBob-${suffix}{
          0%{transform:translateY(0)}
          12.5%{transform:translateY(-10.6px)}
          25%{transform:translateY(-15px)}
          37.5%{transform:translateY(-10.6px)}
          50%{transform:translateY(0)}
          62.5%{transform:translateY(10.6px)}
          75%{transform:translateY(15px)}
          87.5%{transform:translateY(10.6px)}
          100%{transform:translateY(0)}
        }
      </style>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <g class="hicon-scene-${suffix} hicon-a-${suffix}">
        <clipPath id="waveClipA-${suffix}"><rect x="0" y="0" width="200" height="130"/></clipPath>
        <g clip-path="url(#waveClipA-${suffix})">
          <g class="wave-scroll-${suffix}">
            <path d="M-90,65 Q-70,30 -50,65 T-10,65 T30,65 T70,65 T110,65 T150,65 T190,65 T230,65 T270,65" stroke="#2D5F8A" stroke-width="2.4" fill="none"/>
          </g>
        </g>
        <g class="wave-point-${suffix}"><circle cx="50" cy="65" r="4" fill="#E8783A"/></g>
        <text x="100" y="20" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Onde progressive</text>
        <path d="M140,65 L160,65" stroke="#E8783A" stroke-width="2" marker-end="url(#arw1-${suffix})"/>
      </g>
      <g class="hicon-scene-${suffix} hicon-b-${suffix}">
        <circle cx="100" cy="65" r="3" fill="none" stroke="#5B8FB9" stroke-width="1.6">
          <animate attributeName="r" values="3;40" dur="2.4s" begin="0s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="0s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="65" r="3" fill="none" stroke="#5B8FB9" stroke-width="1.6">
          <animate attributeName="r" values="3;40" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="65" r="3" fill="none" stroke="#5B8FB9" stroke-width="1.6">
          <animate attributeName="r" values="3;40" dur="2.4s" begin="1.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="1.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="65" r="3.5" fill="#C0392B"/>
        <text x="100" y="30" text-anchor="middle" font-size="8.5" font-family="Outfit,sans-serif" font-weight="700" fill="#2D5F8A">Onde circulaire à la surface de l'eau</text>
      </g>
      <defs>
        <marker id="arw1-${suffix}" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#E8783A"/></marker>
      </defs>
    </svg>`;
}

function iconSeq12(suffix) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130">
      <style>
        @keyframes flameMain-${suffix}{0%{transform:scaleY(1) scaleX(1) rotate(0deg) translateX(0)}20%{transform:scaleY(1.12) scaleX(0.92) rotate(-4deg) translateX(-2px)}45%{transform:scaleY(0.9) scaleX(1.1) rotate(3deg) translateX(1px)}70%{transform:scaleY(1.08) scaleX(0.94) rotate(-3deg) translateX(-1px)}100%{transform:scaleY(1) scaleX(1) rotate(0deg) translateX(0)}}
        @keyframes flameCore-${suffix}{0%{transform:scaleY(1) scaleX(1)}30%{transform:scaleY(0.88) scaleX(1.1)}60%{transform:scaleY(1.12) scaleX(0.9)}100%{transform:scaleY(1) scaleX(1)}}
        @keyframes flameLeft-${suffix}{0%{transform:scaleY(1) rotate(0deg)}30%{transform:scaleY(1.15) rotate(5deg)}65%{transform:scaleY(0.85) rotate(-4deg)}100%{transform:scaleY(1) rotate(0deg)}}
        @keyframes flameRight-${suffix}{0%{transform:scaleY(1) rotate(0deg)}35%{transform:scaleY(0.86) rotate(-5deg)}70%{transform:scaleY(1.14) rotate(4deg)}100%{transform:scaleY(1) rotate(0deg)}}
        @keyframes windFlow-${suffix}{0%{stroke-dashoffset:18}100%{stroke-dashoffset:0}}
        .flame-main-${suffix}{animation:flameMain-${suffix} 1.1s ease-in-out infinite}
        .flame-core-${suffix}{animation:flameCore-${suffix} 0.9s ease-in-out infinite}
        .flame-left-${suffix}{animation:flameLeft-${suffix} 1.3s ease-in-out infinite}
        .flame-right-${suffix}{animation:flameRight-${suffix} 1.5s ease-in-out infinite .15s}
        .wind-lines-${suffix} path{animation:windFlow-${suffix} 1s linear infinite}
      </style>
      <defs>
        <linearGradient id="flameGrad-${suffix}" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#BFE3F5"/>
          <stop offset="18%" stop-color="#FFFFFF"/>
          <stop offset="48%" stop-color="#E8783A"/>
          <stop offset="100%" stop-color="#FFCA28"/>
        </linearGradient>
        <linearGradient id="flameGradCore-${suffix}" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#E8F6FF"/>
          <stop offset="35%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#FFECB3"/>
        </linearGradient>
      </defs>
      <rect width="200" height="130" rx="10" fill="#E8F1F8"/>
      <text x="100" y="20" text-anchor="middle" font-size="9" font-family="Outfit,sans-serif" font-weight="800" fill="#2D5F8A">Combustion</text>
      <g class="wind-lines-${suffix}">
        <path d="M15,68 C35,63 45,70 60,66" fill="none" stroke="#5B8FB9" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5" style="animation-delay:0s"/>
        <path d="M12,84 C33,81 48,87 65,83" fill="none" stroke="#5B8FB9" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5" style="animation-delay:.25s"/>
        <path d="M15,100 C35,97 48,102 62,98" fill="none" stroke="#5B8FB9" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5" style="animation-delay:.5s"/>
      </g>
      <g class="flame-left-${suffix}" style="transform-origin:76px 108px">
        <path d="M76,109 C64,102 60,90 66,78 C69,71 73,67 76,58 C79,67 83,71 86,78 C93,90 88,102 76,109 Z" fill="url(#flameGrad-${suffix})"/>
      </g>
      <g class="flame-right-${suffix}" style="transform-origin:124px 108px">
        <path d="M124,109 C110,101 105,86 112,72 C115,65 119,60 122,50 C125,60 130,65 133,72 C140,86 135,101 124,109 Z" fill="url(#flameGrad-${suffix})"/>
      </g>
      <g class="flame-main-${suffix}" style="transform-origin:100px 108px">
        <path d="M100,110 C80,100 74,80 84,60 C89,49 95,44 99,30 C103,44 109,49 115,60 C126,80 120,100 100,110 Z" fill="url(#flameGrad-${suffix})"/>
      </g>
      <g class="flame-core-${suffix}" style="transform-origin:100px 98px">
        <path d="M100,102 C90,95 88,82 95,68 C98,61 100,56 100,49 C100,56 103,61 106,68 C113,82 111,95 100,102 Z" fill="url(#flameGradCore-${suffix})"/>
      </g>
      <g>
        <rect x="70" y="108" width="60" height="10" rx="5" fill="#8B5A2B"/>
        <ellipse cx="70" cy="113" rx="6" ry="6" fill="#6B4423"/>
        <ellipse cx="130" cy="113" rx="6" ry="6" fill="#6B4423"/>
      </g>
    </svg>`;
}

const PRE_ICONS = {
  'seq00': iconSeq00,
  'seq01': iconLumiereCouleurs,
  'seq02': iconModelesOndulatoireParticulaire,
  'seq03': iconSeq03,
  'seq04': iconSeq04,
  'seq05': iconSeq05,
  'seq06': iconSeq06,
  'seq07': iconSeq07,
  'seq08': iconSeq08,
  'seq09': iconSeq09,
  'seq10': iconSeq10,
  'seq11': iconSeq11,
  'seq12': iconSeq12,
  'seq14': iconSeq14
};

function getIconPre(name, suffix) {
  const icon = PRE_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}
