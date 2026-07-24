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

const PRE_ICONS = {
  'seq00': iconSeq00,
  'seq01': iconLumiereCouleurs,
  'seq02': iconModelesOndulatoireParticulaire,
  'seq03': iconSeq03,
  'seq04': iconSeq04,
  'seq05': iconSeq05
};

function getIconPre(name, suffix) {
  const icon = PRE_ICONS[name];
  if (!icon) return '';
  return (typeof icon === 'function') ? icon(suffix || name) : icon;
}
