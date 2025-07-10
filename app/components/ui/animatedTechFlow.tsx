"use client";

import { motion } from "framer-motion";

export default function AnimatedTechFlow() {
  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-4xl overflow-hidden">
        <svg 
          width="100%" 
          height="340" 
          viewBox="0 0 640 340" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <style>
            {`
              @keyframes beam-flow {
                0% {
                  stroke-dasharray: 60 200;
                  stroke-dashoffset: 260;
                }
                100% {
                  stroke-dasharray: 60 200;
                  stroke-dashoffset: 0;
                }
              }
              
              .animated-beam {
                animation: beam-flow 3s linear infinite;
                stroke-width: 3;
                opacity: 0.9;
              }
              
              .animated-beam:nth-child(7) {
                animation-delay: 0s;
              }
              
              .animated-beam:nth-child(8) {
                animation-delay: 0.4s;
              }
              
              .animated-beam:nth-child(9) {
                animation-delay: 0.8s;
              }
              
              .animated-beam:nth-child(10) {
                animation-delay: 1.2s;
              }
              
              .animated-beam:nth-child(11) {
                animation-delay: 1.6s;
              }
              
              .animated-beam:nth-child(12) {
                animation-delay: 2.0s;
              }
            `}
          </style>
          
          <g filter="url(#filter0_dd_22_154)">
            <g clipPath="url(#clip0_22_154)">
              {/* Static base paths */}
              <path d="M552 38C474.667 38 397.333 75.3333 320 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M552 94C474.667 94 397.333 112.667 320 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M552 150C474.667 150 397.333 150 320 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M552 206C474.667 206 397.333 187.333 320 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M552 262C474.667 262 397.333 224.667 320 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M320 150C242.667 150 165.333 150 88 150" stroke="#808080" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Animated beam paths */}
              <path className="animated-beam" d="M552 38C474.667 38 397.333 75.3333 320 150" stroke="url(#paint0_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              <path className="animated-beam" d="M552 94C474.667 94 397.333 112.667 320 150" stroke="url(#paint1_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              <path className="animated-beam" d="M552 150C474.667 150 397.333 150 320 150" stroke="url(#paint2_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              <path className="animated-beam" d="M552 206C474.667 206 397.333 187.333 320 150" stroke="url(#paint3_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              <path className="animated-beam" d="M552 262C474.667 262 397.333 224.667 320 150" stroke="url(#paint4_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              <path className="animated-beam" d="M320 150C242.667 150 165.333 150 88 150" stroke="url(#paint5_linear_22_154)" strokeWidth="3" strokeLinecap="round"/>
              
              {/* Technology nodes */}
              <g filter="url(#filter1_d_22_154)">
                <path d="M528 38C528 24.7452 538.745 14 552 14V14C565.255 14 576 24.7452 576 38V38C576 51.2548 565.255 62 552 62V62C538.745 62 528 51.2548 528 38V38Z" fill="white"/>
                <path d="M552 15C564.703 15 575 25.2975 575 38C575 50.7025 564.703 61 552 61C539.297 61 529 50.7025 529 38C529 25.2975 539.297 15 552 15Z" stroke="#E0E0E0" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M552 30.5449C548.666 30.5449 546.584 32.2012 545.75 35.5149C547 33.8587 548.459 33.2374 550.125 33.6512C551.076 33.8874 551.756 34.5737 552.507 35.3324C553.734 36.5687 555.152 37.9999 558.25 37.9999C561.584 37.9999 563.666 36.3437 564.5 33.0299C563.25 34.6862 561.792 35.3074 560.125 34.8937C559.174 34.6574 558.494 33.9712 557.741 33.2124C556.516 31.9749 555.099 30.5449 552 30.5449ZM545.75 37.9999C542.416 37.9999 540.334 39.6562 539.5 42.9699C540.75 41.3124 542.209 40.6924 543.875 41.1062C544.826 41.3424 545.506 42.0287 546.259 42.7874C547.484 44.0237 548.902 45.4549 552.001 45.4549C555.335 45.4549 557.417 43.7987 558.251 40.4849C557.001 42.1412 555.542 42.7624 553.876 42.3487C552.925 42.1124 552.245 41.4262 551.494 40.6674C550.266 39.4312 548.847 37.9999 545.75 37.9999Z" fill="#73BEFF"/>
              </g>
              
              {/* Next.js icon */}
              <g filter="url(#filter2_d_22_154)">
                <path d="M528 94C528 80.7452 538.745 70 552 70V70C565.255 70 576 80.7452 576 94V94C576 107.255 565.255 118 552 118V118C538.745 118 528 107.255 528 94V94Z" fill="white"/>
                <path d="M552 71C564.703 71 575 81.2975 575 94C575 106.703 564.703 117 552 117C539.297 117 529 106.703 529 94C529 81.2975 539.297 71 552 71Z" stroke="#E0E0E0" strokeWidth="2"/>
                <path d="M551.214 82.0065C551.162 82.0111 550.998 82.0276 550.85 82.0393C547.442 82.3466 544.249 84.1856 542.226 87.0122C541.1 88.5838 540.38 90.3665 540.108 92.2548C540.012 92.9139 540 93.1086 540 94.0023C540 94.8961 540.012 95.0908 540.108 95.7499C540.76 100.256 543.967 104.042 548.317 105.445C549.096 105.696 549.917 105.867 550.85 105.97C551.214 106.01 552.786 106.01 553.15 105.97C554.761 105.792 556.127 105.393 557.473 104.706C557.68 104.6 557.72 104.572 557.691 104.549C557.673 104.535 556.793 103.355 555.737 101.928L553.818 99.3365L551.413 95.778C550.09 93.8217 549.002 92.222 548.992 92.222C548.983 92.2196 548.974 93.8006 548.969 95.7311C548.962 99.1113 548.96 99.2473 548.917 99.3271C548.856 99.442 548.809 99.4889 548.711 99.5405C548.636 99.5781 548.57 99.5851 548.216 99.5851H547.81L547.702 99.5171C547.632 99.4725 547.58 99.4139 547.545 99.3458L547.496 99.2403L547.5 94.5372L547.507 89.8317L547.58 89.7402C547.618 89.691 547.697 89.6276 547.754 89.5971C547.85 89.5502 547.887 89.5455 548.293 89.5455C548.772 89.5455 548.852 89.5643 548.976 89.7003C549.011 89.7379 550.313 91.6989 551.871 94.061C553.429 96.4231 555.559 99.6484 556.605 101.232L558.506 104.11L558.602 104.047C559.453 103.493 560.354 102.705 561.067 101.884C562.585 100.141 563.564 98.0158 563.892 95.7499C563.988 95.0908 564 94.8961 564 94.0023C564 93.1086 563.988 92.9139 563.892 92.2548C563.24 87.7487 560.033 83.9628 555.683 82.56C554.916 82.3114 554.1 82.1402 553.185 82.037C552.96 82.0135 551.409 81.9877 551.214 82.0065ZM556.127 89.264C556.239 89.3203 556.331 89.4282 556.364 89.5408C556.382 89.6018 556.387 90.906 556.382 93.8452L556.375 98.0627L555.632 96.9227L554.886 95.7827V92.7169C554.886 90.7348 554.895 89.6206 554.909 89.5666C554.947 89.4353 555.029 89.3321 555.141 89.2711C555.238 89.2218 555.273 89.2171 555.641 89.2171C555.988 89.2171 556.049 89.2218 556.127 89.264Z" fill="black"/>
              </g>
              
              {/* Nuxt icon */}
              <g filter="url(#filter3_d_22_154)">
                <path d="M528 150C528 136.745 538.745 126 552 126V126C565.255 126 576 136.745 576 150V150C576 163.255 565.255 174 552 174V174C538.745 174 528 163.255 528 150V150Z" fill="white"/>
                <path d="M552 127C564.703 127 575 137.297 575 150C575 162.703 564.703 173 552 173C539.297 173 529 162.703 529 150C529 137.297 539.297 127 552 127Z" stroke="#E0E0E0" strokeWidth="2"/>
                <g clipPath="url(#clip1_22_154)">
                  <path d="M554.027 161.399C553.398 162.196 552.121 161.759 552.106 160.742L551.884 145.863H561.841C563.644 145.863 564.65 147.956 563.529 149.375L554.027 161.399Z" fill="url(#paint6_linear_22_154)"/>
                  <path d="M554.027 161.399C553.398 162.196 552.121 161.759 552.106 160.742L551.884 145.863H561.841C563.644 145.863 564.65 147.956 563.529 149.375L554.027 161.399Z" fill="url(#paint7_linear_22_154)" fillOpacity="0.2"/>
                  <path d="M549.978 137.458C550.608 136.662 551.884 137.098 551.899 138.115L551.997 152.994H542.165C540.361 152.994 539.355 150.901 540.477 149.482L549.978 137.458Z" fill="#3ECF8E"/>
                </g>
              </g>
              
              {/* Supabase icon */}
              <g filter="url(#filter4_d_22_154)">
                <path d="M528 206C528 192.745 538.745 182 552 182V182C565.255 182 576 192.745 576 206V206C576 219.255 565.255 230 552 230V230C538.745 230 528 219.255 528 206V206Z" fill="white"/>
                <path d="M552 183C564.703 183 575 193.297 575 206C575 218.703 564.703 229 552 229C539.297 229 529 218.703 529 206C529 193.297 539.297 183 552 183Z" stroke="#E0E0E0" strokeWidth="2"/>
                <path d="M564.242 206.337C563.938 205.203 563.331 204.205 562.498 203.42C563.179 201.821 563.076 199.986 562.206 198.478C561.371 197.033 560.024 195.999 558.413 195.567C557.278 195.264 556.109 195.29 555.011 195.62C553.966 194.229 552.337 193.4 550.588 193.4C547.645 193.4 545.176 195.45 544.519 198.195C544.513 198.195 544.507 198.193 544.501 198.193C542.76 198.409 541.259 199.405 540.382 200.923C539.548 202.368 539.326 204.051 539.758 205.663C540.062 206.797 540.67 207.796 541.504 208.582C540.823 210.181 540.922 212.01 541.794 213.522C542.629 214.967 543.976 216.001 545.587 216.433C546.125 216.577 546.671 216.648 547.214 216.648C547.816 216.648 548.411 216.552 548.988 216.378C550.033 217.771 551.655 218.6 553.412 218.6C556.358 218.6 558.829 216.547 559.484 213.798C561.212 213.588 562.742 212.595 563.618 211.077C564.452 209.632 564.674 207.949 564.242 206.337ZM558.102 196.726C559.405 197.074 560.492 197.91 561.166 199.077C561.796 200.167 561.912 201.477 561.508 202.657C561.448 202.62 561.392 202.579 561.331 202.543L555.83 199.367C555.643 199.26 555.411 199.261 555.224 199.371L549.105 202.995L549.074 200.231L554.272 197.23C555.44 196.556 556.8 196.378 558.102 196.726ZM554.842 204.317L554.879 207.619L552.038 209.302L549.158 207.683L549.121 204.381L551.963 202.698L554.842 204.317ZM545.541 199.647C545.541 196.864 547.805 194.6 550.588 194.6C551.854 194.6 553.043 195.15 553.863 196.093C553.8 196.126 553.735 196.155 553.672 196.191L548.17 199.367C547.983 199.476 547.868 199.677 547.87 199.893L547.95 207.004L545.541 205.649V199.647ZM540.917 205.353C540.568 204.051 540.748 202.69 541.421 201.523C542.057 200.421 543.115 199.678 544.352 199.438C544.349 199.508 544.341 199.576 544.341 199.647V206C544.341 206.217 544.458 206.416 544.647 206.523L550.844 210.009L548.466 211.418L543.269 208.417C542.101 207.743 541.266 206.655 540.917 205.353ZM545.898 215.274C544.595 214.926 543.508 214.09 542.834 212.923C542.202 211.828 542.084 210.522 542.49 209.341C542.551 209.379 542.608 209.421 542.669 209.457L548.171 212.633C548.263 212.686 548.367 212.713 548.471 212.713C548.577 212.713 548.683 212.685 548.777 212.629L554.896 209.005L554.927 211.769L549.729 214.77C548.561 215.445 547.201 215.624 545.898 215.274ZM558.459 212.353C558.459 215.136 556.195 217.4 553.412 217.4C552.14 217.4 550.955 216.849 550.136 215.904C550.199 215.87 550.266 215.845 550.328 215.809L555.83 212.632C556.018 212.524 556.133 212.322 556.13 212.106L556.05 204.996L558.459 206.351V212.353ZM562.579 210.477C561.945 211.575 560.875 212.329 559.648 212.567C559.651 212.495 559.659 212.425 559.659 212.353V206C559.659 205.783 559.542 205.584 559.353 205.477L553.156 201.991L555.534 200.582L560.731 203.583C561.899 204.257 562.734 205.345 563.083 206.647C563.432 207.949 563.252 209.31 562.579 210.477Z" fill="black"/>
              </g>
              
              {/* Brand icon */}
              <g filter="url(#filter5_d_22_154)">
                <path d="M528 262C528 248.745 538.745 238 552 238V238C565.255 238 576 248.745 576 262V262C576 275.255 565.255 286 552 286V286C538.745 286 528 275.255 528 262V262Z" fill="white"/>
                <path d="M552 239C564.703 239 575 249.297 575 262C575 274.703 564.703 285 552 285C539.297 285 529 274.703 529 262C529 249.297 539.297 239 552 239Z" stroke="#E0E0E0" strokeWidth="2"/>
                <path d="M544.024 266.334L549.189 263.436L549.276 263.184L549.189 263.044H548.938L548.074 262.991L545.123 262.911L542.564 262.805L540.084 262.671L539.46 262.538L538.875 261.768L538.935 261.383L539.459 261.031L540.211 261.096L541.872 261.21L544.364 261.382L546.172 261.488L548.851 261.766H549.276L549.336 261.595L549.191 261.488L549.077 261.382L546.498 259.635L543.706 257.788L542.243 256.724L541.453 256.185L541.054 255.68L540.882 254.578L541.6 253.787L542.564 253.853L542.811 253.918L543.787 254.67L545.874 256.285L548.598 258.291L548.997 258.623L549.156 258.509L549.176 258.429L548.997 258.13L547.515 255.451L545.934 252.727L545.231 251.597L545.045 250.92C544.979 250.642 544.931 250.408 544.931 250.123L545.748 249.013L546.2 248.868L547.29 249.013L547.75 249.411L548.427 250.961L549.524 253.4L551.226 256.716L551.724 257.7L551.99 258.611L552.089 258.889H552.261V258.73L552.401 256.861L552.66 254.568L552.912 251.616L552.999 250.785L553.41 249.789L554.227 249.25L554.866 249.555L555.39 250.307L555.318 250.793L555.006 252.821L554.394 255.997L553.996 258.124H554.228L554.494 257.858L555.57 256.43L557.378 254.17L558.176 253.273L559.106 252.282L559.704 251.811H560.833L561.664 253.046L561.292 254.323L560.129 255.798L559.165 257.047L557.782 258.908L556.919 260.397L556.999 260.516L557.205 260.496L560.328 259.831L562.016 259.526L564.029 259.181L564.941 259.606L565.04 260.039L564.682 260.923L562.528 261.455L560.003 261.96L556.241 262.85L556.195 262.884L556.248 262.95L557.942 263.109L558.667 263.148H560.442L563.746 263.394L564.609 263.965L565.125 264.663L565.038 265.195L563.709 265.871L561.915 265.446L557.728 264.45L556.293 264.091H556.094V264.21L557.29 265.38L559.483 267.36L562.228 269.913L562.368 270.544L562.016 271.042L561.643 270.989L559.231 269.174L558.3 268.357L556.193 266.583H556.052V266.769L556.538 267.48L559.103 271.335L559.236 272.518L559.05 272.902L558.385 273.135L557.655 273.001L556.154 270.894L554.604 268.52L553.355 266.393L553.202 266.48L552.465 274.423L552.119 274.829L551.322 275.134L550.657 274.629L550.304 273.812L550.657 272.197L551.082 270.09L551.428 268.415L551.74 266.333L551.926 265.642L551.914 265.596L551.761 265.615L550.192 267.769L547.807 270.993L545.919 273.014L545.468 273.193L544.684 272.787L544.756 272.062L545.194 271.417L547.807 268.093L549.383 266.033L550.4 264.844L550.393 264.672H550.333L543.394 269.178L542.158 269.337L541.626 268.839L541.692 268.022L541.944 267.756L544.03 266.321L544.023 266.328L544.024 266.334Z" fill="url(#paint8_linear_22_154)"/>
              </g>
              
              {/* Central Cursor icon */}
              <g filter="url(#filter6_d_22_154)">
                <path d="M288 150C288 132.327 302.327 118 320 118V118C337.673 118 352 132.327 352 150V150C352 167.673 337.673 182 320 182V182C302.327 182 288 167.673 288 150V150Z" fill="white"/>
                <path d="M320 119C337.121 119 351 132.879 351 150C351 167.121 337.121 181 320 181C302.879 181 289 167.121 289 150C289 132.879 302.879 119 320 119Z" stroke="#E0E0E0" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M319.984 137.5L309.356 143.75V156.25L319.999 162.5L330.606 156.25V143.75L319.984 137.5Z" fill="#BCBCBC"/>
                <path d="M309.981 155.625L319.737 150.284" stroke="#BCBCBC" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M319.982 138.689L319.979 144.915" stroke="#BCBCBC" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M329.981 155.625L325.606 153.125" stroke="#BCBCBC" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M319.984 137.5L309.356 143.75V156.25L319.981 150L319.984 137.5Z" fill="#757575"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M319.988 143.75H330.606V156.25L319.982 150L319.988 143.75Z" fill="#424242"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M330.606 143.75L319.979 145.625L319.984 137.5L330.606 143.75Z" fill="#616161"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M309.356 143.75L319.988 145.551L319.979 150L309.356 156.25V143.75Z" fill="#616161"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M309.356 143.75L319.981 150L319.999 162.5L330.606 143.75H309.356Z" fill="#EDEDED"/>
              </g>
              
              {/* Magic icon */}
              <g filter="url(#filter7_d_22_154)">
                <path d="M64 150C64 136.745 74.7452 126 88 126V126C101.255 126 112 136.745 112 150V150C112 163.255 101.255 174 88 174V174C74.7452 174 64 163.255 64 150V150Z" fill="white"/>
                <path d="M88 127C100.703 127 111 137.297 111 150C111 162.703 100.703 173 88 173C75.2975 173 65 162.703 65 150C65 137.297 75.2975 127 88 127Z" stroke="#E0E0E0" strokeWidth="2"/>
              </g>
              <path d="M71.696 154V145.768H73.688L76.34 151.972L78.992 145.768H80.984V154H79.376V148.156L77.024 154H75.656L73.304 148.156V154H71.696ZM85.014 154.168C83.142 154.168 81.894 152.896 81.894 151C81.894 149.104 83.142 147.832 85.014 147.832C85.722 147.832 86.502 148.156 86.958 148.648V148H88.398V154H86.958V153.352C86.502 153.844 85.722 154.168 85.014 154.168ZM85.158 152.896C86.238 152.896 86.958 152.14 86.958 151C86.958 149.86 86.238 149.104 85.158 149.104C84.066 149.104 83.334 149.86 83.334 151C83.334 152.14 84.066 152.896 85.158 152.896ZM92.1748 156.4C90.5308 156.4 89.3068 155.44 89.1028 154H90.5428C90.7228 154.672 91.3708 155.128 92.1748 155.128C93.2668 155.128 93.8788 154.48 93.8788 153.34V153.244C93.4348 153.7 92.7028 154 92.0428 154C90.2308 154 89.0308 152.764 89.0308 150.916C89.0308 149.068 90.2308 147.832 92.0428 147.832C92.7028 147.832 93.4348 148.132 93.8788 148.588V148H95.3188V153.34C95.3188 155.296 94.1908 156.4 92.1748 156.4ZM92.1868 152.728C93.2068 152.728 93.8788 152.008 93.8788 150.916C93.8788 149.824 93.2068 149.104 92.1868 149.104C91.1548 149.104 90.4708 149.824 90.4708 150.916C90.4708 152.008 91.1548 152.728 92.1868 152.728ZM96.4192 147.088V145.768H97.8592V147.088H96.4192ZM96.4192 154V148H97.8592V154H96.4192ZM101.974 154.168C100.018 154.168 98.7222 152.896 98.7222 151C98.7222 149.104 100.018 147.832 101.974 147.832C103.594 147.832 104.842 148.852 105.106 150.376H103.726C103.534 149.608 102.838 149.104 101.974 149.104C100.882 149.104 100.162 149.86 100.162 151C100.162 152.14 100.882 152.896 101.974 152.896C102.85 152.896 103.558 152.368 103.738 151.564H105.118C104.866 153.124 103.606 154.168 101.974 154.168Z" fill="black"/>
            </g>
          </g>
          
          {/* Gradients and filters */}
          <defs>
            <filter id="filter0_dd_22_154" x="0" y="0" width="640" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset dy="20"/>
              <feGaussianBlur stdDeviation="12.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect2_dropShadow_22_154"/>
              <feOffset dy="8"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect2_dropShadow_22_154" result="effect2_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter1_d_22_154" x="520" y="6" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter2_d_22_154" x="520" y="62" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter3_d_22_154" x="520" y="118" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter4_d_22_154" x="520" y="174" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter5_d_22_154" x="520" y="230" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter6_d_22_154" x="280" y="110" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <filter id="filter7_d_22_154" x="56" y="118" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_154"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_154"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_154" result="shape"/>
            </filter>
            
            <linearGradient id="paint0_linear_22_154" x1="552" y1="38" x2="320" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_22_154" x1="552" y1="94" x2="320" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_22_154" x1="552" y1="150" x2="320" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_22_154" x1="552" y1="206" x2="320" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint4_linear_22_154" x1="552" y1="262" x2="320" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint5_linear_22_154" x1="320" y1="150" x2="88" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C40FF"/>
              <stop offset="0.5" stopColor="#7C3AED"/>
              <stop offset="1" stopColor="#9C40FF" stopOpacity="0"/>
            </linearGradient>
            
            <linearGradient id="paint6_linear_22_154" x1="551.884" y1="149.162" x2="560.746" y2="152.861" gradientUnits="userSpaceOnUse">
              <stop stopColor="#249361"/>
              <stop offset="1" stopColor="#3ECF8E"/>
            </linearGradient>
            
            <linearGradient id="paint7_linear_22_154" x1="547.961" y1="143.765" x2="552.027" y2="151.382" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
            
            <linearGradient id="paint8_linear_22_154" x1="552" y1="248.867" x2="552" y2="275.133" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97757"/>
              <stop offset="1" stopColor="#DB5B32"/>
            </linearGradient>
            
            <clipPath id="clip0_22_154">
              <path d="M20 7.99999C20 3.58171 23.5817 0 28 0H612C616.418 0 620 3.58172 620 8V292C620 296.418 616.418 300 612 300H28C23.5817 300 20 296.418 20 292V7.99999Z" fill="white"/>
            </clipPath>
            
            <clipPath id="clip1_22_154">
              <rect width="24" height="25" fill="white" transform="translate(540 137)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
} 