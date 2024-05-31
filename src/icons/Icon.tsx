import { FC } from 'react';

interface WeatherIconsProps {
    id: string;
    width: number;
}

export const Icon: FC<WeatherIconsProps> = ({ id, width }) => {
    switch (id) {
        case 'cloudy':
            return (
                <svg width={width} viewBox='0 0 370 293' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_bdi_4_90)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M121 198.989C120.668 198.996 120.334 199 120 199C95.1472 199 75 178.853 75 154C75 137.134 84.2787 122.435 98.0099 114.73C98.0033 114.321 98 113.911 98 113.5C98 72.3548 131.355 39 172.5 39C207.991 39 237.686 63.8177 245.177 97.0456C272.334 98.186 294 120.563 294 148C294 176.167 271.167 199 243 199H121V198.989Z'
                              fill='url(#paint0_radial_4_90)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter1_di_4_90)'>
                        <circle cx='120' cy='154' r='45' fill='#848484' />
                    </g>
                    <g opacity='0.54' filter='url(#filter2_f_4_90)'>
                        <ellipse cx='141' cy='150.5' rx='46' ry='42.5' fill='white' />
                        <ellipse cx='185' cy='123' rx='60' ry='64' fill='white' />
                        <ellipse cx='265' cy='111.5' rx='46' ry='42.5' fill='white' />
                        <ellipse cx='112.5' cy='184.5' rx='53.5' ry='49.5' fill='white' />
                        <ellipse cx='94.5' cy='194' rx='30.5' ry='28' fill='white' />
                    </g>
                    <defs>
                        <filter id='filter0_bdi_4_90' x='43' y='23' width='283' height='224'
                                filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_90' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_90' result='effect2_dropShadow_4_90' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_90' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_90' />
                        </filter>
                        <filter id='filter1_di_4_90' x='67' y='93' width='120' height='118' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_90' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_90' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_90' />
                        </filter>
                        <filter id='filter2_f_4_90' x='0.175629' y='0.175629' width='369.649' height='292.649'
                                filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='29.4122' result='effect1_foregroundBlur_4_90' />
                        </filter>
                        <radialGradient id='paint0_radial_4_90' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(152.164 73.1145) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                    </defs>
                </svg>
            );

        case 'partly-cloud':
            return (
                <svg width={width} viewBox='0 0 297 286' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_i_4_130)'>
                        <circle cx='189' cy='109' r='73' fill='#FFAB0B' />
                    </g>
                    <circle cx='188.5' cy='108.5' r='100.5' stroke='#FFE200' strokeWidth='16' strokeLinecap='round'
                            strokeDasharray='1 70' />
                    <g filter='url(#filter1_bdi_4_130)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M78 237.989C77.6675 237.996 77.3342 238 77 238C52.1472 238 32 217.853 32 193C32 176.134 41.2787 161.435 55.0099 153.73C55.0033 153.321 55 152.911 55 152.5C55 111.355 88.3548 78 129.5 78C164.991 78 194.686 102.818 202.177 136.046C229.334 137.186 251 159.563 251 187C251 215.167 228.167 238 200 238C199.33 238 198.663 237.987 198 237.962V238H78V237.989Z'
                              fill='url(#paint0_radial_4_130)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter2_di_4_130)'>
                        <circle cx='77' cy='193' r='45' fill='#848484' />
                    </g>
                    <defs>
                        <filter id='filter0_i_4_130' x='106' y='36' width='156' height='159'
                                filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-10' dy='13' />
                            <feGaussianBlur stdDeviation='12' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0' />
                            <feBlend mode='normal' in2='shape' result='effect1_innerShadow_4_130' />
                        </filter>
                        <filter id='filter1_bdi_4_130' x='0' y='62' width='283' height='224'
                                filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_130' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_130'
                                     result='effect2_dropShadow_4_130' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_130' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_130' />
                        </filter>
                        <filter id='filter2_di_4_130' x='24' y='132' width='120' height='118'
                                filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_130' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_130' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_130' />
                        </filter>
                        <radialGradient id='paint0_radial_4_130' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 112.114) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                    </defs>
                </svg>
            );

        case 'rain':
            return (
                <svg width={width} viewBox='0 0 283 255' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_bdi_4_42)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M200 176H78V175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 152.159 229.77 174.36 203 175.913V176H200Z'
                              fill='url(#paint0_radial_4_42)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter1_di_4_42)'>
                        <circle cx='77' cy='131' r='45' fill='#848484' />
                    </g>
                    <path
                        d='M113.07 199.89C114.007 199.005 115.551 199.564 115.697 200.84L116.88 211.231C117.451 216.244 112.532 220.12 107.779 218.401C103.027 216.682 101.765 210.569 105.444 207.093L113.07 199.89Z'
                        fill='#00D0E2' />
                    <path
                        d='M142.07 199.89C143.007 199.005 144.551 199.564 144.697 200.84L145.88 211.231C146.451 216.244 141.532 220.12 136.779 218.401C132.027 216.682 130.765 210.569 134.444 207.093L142.07 199.89Z'
                        fill='#00D0E2' />
                    <path
                        d='M173.07 199.89C174.007 199.005 175.551 199.564 175.697 200.84L176.88 211.231C177.451 216.244 172.532 220.12 167.779 218.401C163.027 216.682 161.765 210.569 165.444 207.093L173.07 199.89Z'
                        fill='#00D0E2' />
                    <path
                        d='M123.069 231.904C124.004 231.019 125.548 231.58 125.695 232.857L126.888 243.258C127.464 248.277 122.553 252.151 117.803 250.425C113.053 248.7 111.785 242.58 115.458 239.105L123.069 231.904Z'
                        fill='#00D0E2' />
                    <path
                        d='M152.069 231.904C153.004 231.019 154.548 231.58 154.695 232.857L155.888 243.258C156.464 248.277 151.553 252.151 146.803 250.425C142.053 248.7 140.785 242.58 144.458 239.105L152.069 231.904Z'
                        fill='#00D0E2' />
                    <defs>
                        <filter id='filter0_bdi_4_42' x='0' y='0' width='283' height='224' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_42' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_42' result='effect2_dropShadow_4_42' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_42' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_42' />
                        </filter>
                        <filter id='filter1_di_4_42' x='24' y='70' width='120' height='118' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_42' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_42' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_42' />
                        </filter>
                        <radialGradient id='paint0_radial_4_42' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                    </defs>
                </svg>
            );

        case 'rain-storm':
            return (
                <svg width={width} viewBox='0 0 283 254' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M122.523 205.551L127 176H155L149.888 197.3C149.435 199.186 150.865 201 152.805 201H155.424C157.814 201 159.244 203.659 157.927 205.653L126 254L136.994 212.773C137.502 210.868 136.066 209 134.095 209H125.489C123.653 209 122.248 207.366 122.523 205.551Z'
                        fill='url(#paint0_linear_4_22)' />
                    <g filter='url(#filter0_bdi_4_22)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M200 176H78V175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 152.497 229.24 174.911 202 175.962V176H200Z'
                              fill='url(#paint1_radial_4_22)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter1_di_4_22)'>
                        <circle cx='77' cy='131' r='45' fill='#848484' />
                    </g>
                    <mask id='mask0_4_22' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='32' y='16'
                          width='219' height='160'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M200 176H78V175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 151.137 231.339 172.681 206 175.651V176H200Z'
                              fill='url(#paint2_radial_4_22)' fillOpacity='0.77' />
                    </mask>
                    <g mask='url(#mask0_4_22)'>
                        <g filter='url(#filter2_f_4_22)'>
                            <path
                                d='M139 138C112.544 157.479 88.5142 171.005 73 176H210C193.343 176 158.189 149.55 139 138Z'
                                fill='url(#paint3_radial_4_22)' />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }} filter='url(#filter3_f_4_22)'>
                            <path
                                d='M145 121C128.284 130.573 104.802 175.545 95 178H195C184.475 178 157.124 126.677 145 121Z'
                                fill='url(#paint4_linear_4_22)' />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }} filter='url(#filter4_f_4_22)'>
                            <path
                                d='M141 133C129.781 139.402 113.579 176.358 107 178L174 176C166.936 176 149.137 136.796 141 133Z'
                                fill='url(#paint5_linear_4_22)' />
                        </g>
                    </g>
                    <defs>
                        <filter id='filter0_bdi_4_22' x='0' y='0' width='283' height='224' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_22' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_22' result='effect2_dropShadow_4_22' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_22' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_22' />
                        </filter>
                        <filter id='filter1_di_4_22' x='24' y='70' width='120' height='118' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_22' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_22' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_22' />
                        </filter>
                        <filter id='filter2_f_4_22' x='65' y='130' width='153' height='54' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur_4_22' />
                        </filter>
                        <filter id='filter3_f_4_22' x='91' y='117' width='108' height='65' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_4_22' />
                        </filter>
                        <filter id='filter4_f_4_22' x='103' y='129' width='75' height='53' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_4_22' />
                        </filter>
                        <linearGradient id='paint0_linear_4_22' x1='144.067' y1='176' x2='144.067' y2='228'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#E2BC38' />
                            <stop offset='1' stopColor='#FFE244' />
                        </linearGradient>
                        <radialGradient id='paint1_radial_4_22' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                        <radialGradient id='paint2_radial_4_22' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                        <radialGradient id='paint3_radial_4_22' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(151.889 171.786) rotate(-90) scale(21.5393 111.274)'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </radialGradient>
                        <linearGradient id='paint4_linear_4_22' x1='147.688' y1='176.888' x2='147.688' y2='169.542'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </linearGradient>
                        <linearGradient id='paint5_linear_4_22' x1='142.361' y1='177.224' x2='142.361' y2='167.077'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </linearGradient>
                    </defs>
                </svg>
            );

        case 'snowing':
            return (
                <svg width={width} viewBox='0 0 283 224' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_bdi_4_57)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M78 175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 153.167 228.167 176 200 176C199.666 176 199.333 175.997 199 175.99V176H78V175.989Z'
                              fill='url(#paint0_radial_4_57)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter1_di_4_57)'>
                        <circle cx='77' cy='131' r='45' fill='#848484' />
                    </g>
                    <line x1='142.25' y1='130.25' x2='142.25' y2='220.75' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M131 137L142 148L152 137' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M152 219L141 208L131 219' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M137 154L142 159L147 154' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M146 203L141 198L136 203' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <line x1='186.75' y1='176.25' x2='96.25' y2='176.25' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M180 165L169 176L180 186' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M98 186L109 175L98 165' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M163 171L158 176L163 181' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M114 180L119 175L114 170' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <line x1='174' y1='143.182' x2='110.007' y2='207.175' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M161 141V156.556L175.849 155.849' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M118 213L118 197.444L103.151 198.151' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M154 156V163.071H161.071' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M126 198L126 190.929L118.929 190.929' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <line x1='173.818' y1='208' x2='109.825' y2='144.007' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M176 195H160.444L161.151 209.849' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M104 152L119.556 152L118.849 137.151' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <path d='M161 188H153.929V195.071' stroke='white' strokeWidth='4.5' strokeLinecap='round' />
                    <path d='M119 160L126.071 160L126.071 152.929' stroke='white' strokeWidth='4.5'
                          strokeLinecap='round' />
                    <defs>
                        <filter id='filter0_bdi_4_57' x='0' y='0' width='283' height='224' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_57' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_57' result='effect2_dropShadow_4_57' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_57' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_57' />
                        </filter>
                        <filter id='filter1_di_4_57' x='24' y='70' width='120' height='118' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_57' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_57' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_57' />
                        </filter>
                        <radialGradient id='paint0_radial_4_57' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                    </defs>
                </svg>
            );

        case 'sunny':
            return (
                <svg width={width} viewBox='0 0 315 281' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_i_4_169)'>
                        <circle cx='152' cy='128' r='73' fill='#FFAB0B' />
                    </g>
                    <circle cx='151.5' cy='127.5' r='100.5' stroke='#FFE200' strokeWidth='20' strokeLinecap='round'
                            strokeDasharray='1 70' />
                    <g opacity='0.7' filter='url(#filter1_f_4_169)'>
                        <ellipse cx='141.5' cy='141' rx='38.5' ry='40' fill='white' />
                        <ellipse cx='179' cy='106' rx='50' ry='52' fill='white' />
                        <ellipse cx='222.5' cy='105' rx='38.5' ry='40' fill='white' />
                        <ellipse cx='99' cy='153' rx='45' ry='47' fill='white' />
                        <ellipse cx='128.5' cy='200.5' rx='25.5' ry='26.5' fill='white' />
                    </g>
                    <defs>
                        <filter id='filter0_i_4_169' x='69' y='55' width='156' height='159' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-10' dy='13' />
                            <feGaussianBlur stdDeviation='12' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0' />
                            <feBlend mode='normal' in2='shape' result='effect1_innerShadow_4_169' />
                        </filter>
                        <filter id='filter1_f_4_169' x='0' y='0' width='315' height='281' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='27' result='effect1_foregroundBlur_4_169' />
                        </filter>
                    </defs>
                </svg>
            );

        case 'thunderstorm':
            return (
                <svg width={width} viewBox='0 0 283 254' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M122.523 205.551L127 176H155L149.888 197.3C149.435 199.186 150.865 201 152.805 201H155.424C157.814 201 159.244 203.659 157.927 205.653L126 254L136.994 212.773C137.502 210.868 136.066 209 134.095 209H125.489C123.653 209 122.248 207.366 122.523 205.551Z'
                        fill='url(#paint0_linear_4_2)' />
                    <g filter='url(#filter0_bdi_4_2)'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M200 176H78V175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 151.82 230.297 173.805 204 175.845V176H200Z'
                              fill='url(#paint1_radial_4_2)' fillOpacity='0.77' />
                    </g>
                    <g style={{ mixBlendMode: 'soft-light' }} filter='url(#filter1_di_4_2)'>
                        <circle cx='77' cy='131' r='45' fill='#848484' />
                    </g>
                    <mask id='mask0_4_2' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='32' y='16'
                          width='219' height='160'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M78 175.989C77.6675 175.996 77.3342 176 77 176C52.1472 176 32 155.853 32 131C32 114.134 41.2787 99.4352 55.0099 91.7296C55.0033 91.3205 55 90.9107 55 90.5C55 49.3548 88.3548 16 129.5 16C164.991 16 194.686 40.8177 202.177 74.0456C229.334 75.186 251 97.5628 251 125C251 153.167 228.167 176 200 176C198.654 176 197.32 175.948 196 175.845V176H78V175.989Z'
                              fill='url(#paint2_radial_4_2)' fillOpacity='0.77' />
                    </mask>
                    <g mask='url(#mask0_4_2)'>
                        <g filter='url(#filter2_f_4_2)'>
                            <path
                                d='M139 138C112.544 157.479 88.5142 171.005 73 176H210C193.343 176 158.189 149.55 139 138Z'
                                fill='url(#paint3_radial_4_2)' />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }} filter='url(#filter3_f_4_2)'>
                            <path
                                d='M146 121C128.448 130.573 103.293 175.545 93 178H198C186.949 178 158.73 126.677 146 121Z'
                                fill='url(#paint4_linear_4_2)' />
                        </g>
                        <g style={{ mixBlendMode: 'screen' }} filter='url(#filter4_f_4_2)'>
                            <path
                                d='M141 133C129.781 139.402 113.579 176.358 107 178L174 176C166.936 176 149.137 136.796 141 133Z'
                                fill='url(#paint5_linear_4_2)' />
                        </g>
                    </g>
                    <defs>
                        <filter id='filter0_bdi_4_2' x='0' y='0' width='283' height='224' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feGaussianBlur in='BackgroundImageFix' stdDeviation='8' />
                            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_4_2' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dy='16' />
                            <feGaussianBlur stdDeviation='16' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0' />
                            <feBlend mode='normal' in2='effect1_backgroundBlur_4_2' result='effect2_dropShadow_4_2' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_4_2' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='1' dy='2' />
                            <feGaussianBlur stdDeviation='7' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                            <feBlend mode='normal' in2='shape' result='effect3_innerShadow_4_2' />
                        </filter>
                        <filter id='filter1_di_4_2' x='24' y='70' width='120' height='118' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='-2' dy='-10' />
                            <feGaussianBlur stdDeviation='3' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_2' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_2' result='shape' />
                            <feColorMatrix in='SourceAlpha' type='matrix'
                                           values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                            <feOffset dx='22' dy='12' />
                            <feGaussianBlur stdDeviation='11' />
                            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0' />
                            <feBlend mode='normal' in2='shape' result='effect2_innerShadow_4_2' />
                        </filter>
                        <filter id='filter2_f_4_2' x='65' y='130' width='153' height='54' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur_4_2' />
                        </filter>
                        <filter id='filter3_f_4_2' x='89' y='117' width='113' height='65' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_4_2' />
                        </filter>
                        <filter id='filter4_f_4_2' x='103' y='129' width='75' height='53' filterUnits='userSpaceOnUse'
                                colorInterpolationFilters='sRGB'>
                            <feFlood floodOpacity='0' result='BackgroundImageFix' />
                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_4_2' />
                        </filter>
                        <linearGradient id='paint0_linear_4_2' x1='144.067' y1='176' x2='144.067' y2='228'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#E2BC38' />
                            <stop offset='1' stopColor='#FFE244' />
                        </linearGradient>
                        <radialGradient id='paint1_radial_4_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                        <radialGradient id='paint2_radial_4_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(109.164 50.1144) rotate(90.6693) scale(125.829 143.587)'>
                            <stop stopColor='white' />
                            <stop offset='1' stopColor='#99CEFF' />
                        </radialGradient>
                        <radialGradient id='paint3_radial_4_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                                        gradientTransform='translate(151.889 171.786) rotate(-90) scale(21.5393 111.274)'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </radialGradient>
                        <linearGradient id='paint4_linear_4_2' x1='148.322' y1='176.888' x2='148.322' y2='169.542'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </linearGradient>
                        <linearGradient id='paint5_linear_4_2' x1='142.361' y1='177.224' x2='142.361' y2='167.077'
                                        gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#FFDE41' />
                            <stop offset='1' stopColor='#FFD200' stopOpacity='0' />
                        </linearGradient>
                    </defs>
                </svg>
            );

        case 'wind':
            return (
                <svg width={width} viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect width='60' height='59.2405' fill='url(#pattern0)' />
                    <defs>
                        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                            <use xlinkHref='#image0_12_386' transform='scale(0.0126582 0.0128205)' />
                        </pattern>
                        <image id='image0_12_386' width='79' height='78'
                               xlinkHref='data:image/png;base64,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' />
                    </defs>
                </svg>
            );

        case 'wind-navigation':
            return (
                <svg width='55' height='55' viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect x='55' y='55' width='55' height='55' transform='rotate(-180 55 55)' fill='url(#pattern0)' />
                    <defs>
                        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                            <use xlinkHref='#image0_13_401' transform='scale(0.0208333)' />
                        </pattern>
                        <image id='image0_13_401' width='48' height='48'
                               xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2RvUoDQRRGF7GwSy+IubHMKwgGUlvaprS1ThVLq8wNZkZSCUIamxQ+wDYp3DFtXsFKBHeU7CiygkSJcTc7O7O/sN8DXO45x7KqVatWLWzkYdHavxItq6xDR9pAXdsqq33k0gcm/FJWQEfaPwClq0CW9n8BylYBl/ZXAUpTgazY/wNQlgq4Yn8doPAVyJr9fwBFr4Br9oMACluBBNgPBChqBQywHwZQuAokxH4oQNEqYIj9TQCFqUA22N8IUJQKuMF+FADkXSHKfiQAy7lClH0VAMirgop9JQCWUwUV+6oAkHUFVfvKACzjCqr24wBAVhXi2I8FwDKqEMd+XABIu0Jc+7EBWMoV4trXAYC0KujY1wJgKVXQsa8LAElX0LWvDcASrqBr3wQAkqpgYt8IgCVUwcS+KQCYVjC1bwzADCuY2k8CAHQr6Nn3XHS8KXI5IPey0+eLxt7l2y7Ql2Og4rxOxR0w8ZRJBYy0730QLufE8W4G/P2078hmz/e3VG5/QzFxAtQd1KmYAnUXiVYItO/IR+TyFrl3hrP3w2vb37ES2lHP3z4YimadvnaAiRFQMQfmfmpXINwbI5cTwr0uOov2xcyvWRmvMXquNYaiDdTtAhOTOnXHWf9QrVo1K/19Af9KAeOOy4JzAAAAAElFTkSuQmCC' />
                    </defs>
                </svg>
            );

        case 'sunrise':
            return (
                <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect width='48' height='48' fill='url(#pattern0)' />
                    <defs>
                        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                            <use xlinkHref='#image0_214_16' transform='scale(0.02)' />
                        </pattern>
                        <image id='image0_214_16' width='50' height='50'
                               xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVR4nO2Zyy4EQRSGi5hERGJjxCMgHoGNy4aFxCOI64zL0tblDXgE8SBYiEjcFtiwIhIbK+zmk2NOJ63NjKmZbqqkvqSTTlfXOf8/daqqM2VMxgArchmfAdaAEmXWjY8ACzET6P2q8QnK5VSqYKTkTZkB8zHRUloRi96YAeZiYj/LKHKRKDe5lo0vJpJGKozYsssmiom2L0b0WTH2/pxxBeBRRRUqtH0zos8L2ufBuAIwDIxWaatoRNtGpa/xAWoY8QqCEccII+IaYURcI4yIa/ynETkCDv9aRyAQCAT8BDgATo3v8I929k+M76AY38E1I0AXkPstI0Ab0GHb76egncALcAHkszYC5IEz4BlotxZcI3AOOFdNVzZmbD/jKZuQHKiZtoaF15HgBuhNNcH3HNdZ5MjczK+ZqJLwIo0alhgay7p00zAjid+SSYFW/Zd9R+fHk05aud8FRuSdRJ8e4L2RxcSk9Ct2J56NA5f8jAgeS/TtTnWFagSgBdiMneLKCrcE9MleoFe/Hu5EJSTvbkhf4wrAtop7BWZqiVPTs1qWwpZxAWAyZmLI8pQrMjORrcr6Nsp7FTPbQH854RXuUt/4bACmY3PCuta1zKI5M2X+CmBfRRSaiCFH1cJeuursRNyqiIEmYgxqjOtmxURD6zPHYkS+MH3n5AOmbkN4s1cmDwAAAABJRU5ErkJggg==' />
                    </defs>
                </svg>
            );
        case 'sunset':
            return (
                <svg width='48' height='49' viewBox='0 0 48 49' fill='none' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect y='0.333374' width='48' height='48' fill='url(#pattern0)' />
                    <defs>
                        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                            <use xlinkHref='#image0_214_11' transform='scale(0.02)' />
                        </pattern>
                        <image id='image0_214_11' width='50' height='50'
                               xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB70lEQVR4nO2Zyy4EQRSGi5CISGwQj4B4BERcNiwkHkFmiLsdS5c34BHEg2AhInFNsGElkdhYYeeTE6eltJiZmummKqkv6WQyOafO/0+d6uqpNiZngH3gxIQOigkdohHPiDPiG3FGfCPOiG8ENSNALzDoagQYBgaMLwBXwDswV6kRidWcB+MLQEFFyTVfzojEWPFF4xNA0RK39JsRYMaKWzA+wnczy2kjQZhIAKZVqLCWGAFWLBOLJgSARUt0QlgmEqw2so18rZ2gAJYtM6smZPhss7DaKRKJRCLeEM9+fSOo/+yliEbyAmgFGv+qtYAGoNk1r9ygLcAzcA60520EaAdOgSegyVlwiYEbgTPVdOliBjgEDhxNXGotMdNQtfAKCtwAnZkW+FnjOo8auZv5MxO/FDzPoodlDB3LuXWzMCOFX9NFgXo9093W9fGoi1Y+7wBDEpPK6QDeqrmZmIx+xbbUd6PABeURwSOp3LZM71DVANQBG9aJidzhZoEu2Qv06taD66SFJHZdco0vAFsq7gWYKiVOTRe0LYVN4wPAuGWizyGv3zIzlq/KyjbKexVTqPKcWLjLfONzAZi01oRzr2ubJWtmwvwXwJ6KmKthDHnpI+xmq85NxK2K6Knx/aNwXauYZGpD5kiMyBNm6Bx/ACrUQ216v8tzAAAAAElFTkSuQmCC' />
                    </defs>
                </svg>
            );

        default:
            return null;
    }
};