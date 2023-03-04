import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const AgoraIcon: FC<IconProps> = (props: IconProps) => (
  <Icon viewBox="0 0 680.49396 818.51636" {...props}>
    <path
      d="M 108.4,818.70657 C 71.900966,813.10393 40.614072,793.47111 20.650004,763.64264 2.691285,736.81037 -3.8723247,703.43118 2.4141112,670.90413 10.283629,630.18595 39.042119,595.27313 77.248334,580.05534 100.71334,570.70906 124.79085,568.28062 148.544,572.8645 c 21.70544,4.18872 38.21719,12.45164 52.51402,26.27939 l 7.34198,7.10109 44.4,-25.61728 c 153.63741,-88.64357 208.80744,-120.84701 215.14155,-125.58088 4.21572,-3.15066 8.06589,-8.55359 10.58611,-14.85545 1.5526,-3.88226 1.83897,-6.07401 1.85425,-14.19136 0.0178,-9.44965 -0.0286,-9.69784 -2.9647,-15.84679 -6.94098,-14.53636 -20.85864,-22.90055 -36.59018,-21.98986 -9.36665,0.54222 -8.3159,-0.009 -99.62704,52.25048 -71.96344,41.18623 -70.62755,40.524 -87.15393,43.20447 -9.24037,1.49873 -27.33492,1.52358 -34.97569,0.0481 -22.74664,-4.39269 -45.05045,-19.59863 -58.26468,-39.72279 -20.93761,-31.88623 -19.6472,-75.34141 3.13536,-105.58443 4.8741,-6.47019 14.98641,-16.19336 20.85895,-20.05624 7.59793,-4.99782 68.87799,-40.64464 194.41439,-113.09151 95.91708,-55.35361 103.74709,-59.77464 105.32703,-59.47037 0.78192,0.15058 3.68944,3.87046 6.46115,8.26638 13.99093,22.18956 27.55384,33.58575 46.36905,38.96144 8.89798,2.54224 28.0393,2.51441 37.42837,-0.0544 24.66603,-6.74859 43.41378,-25.75446 50.22295,-50.9144 2.46032,-9.09092 2.46032,-25.30909 0,-34.4 -7.34383,-27.135613 -27.45207,-46.204864 -54.87525,-52.039935 -12.10379,-2.575432 -29.61166,-0.945066 -40.80067,3.799435 -4.70414,1.994711 -29.37627,15.965393 -92.94703,52.63159 -161.03367,92.88064 -229.78532,132.29896 -253.9321,145.59035 -20.06907,11.04685 -38.4414,15.1976 -62.49319,14.11873 C 99.690623,270.79039 87.140103,267.86305 71.248629,260.3352 58.417653,254.2571 48.723363,247.24268 37.145406,235.6594 18.065626,216.57085 6.1552274,194.32282 1.994899,170 0.17845228,159.38039 0.13002611,136.21106 1.9018517,125.48185 8.2217479,87.212017 35.572233,52.016654 72.399999,34.762884 c 8.704232,-4.077922 20.671272,-7.986517 28.574631,-9.332852 8.22006,-1.400286 40.20634,-1.349567 47.42537,0.0752 25.95593,5.122733 53.83102,21.305585 70.25365,40.785679 9.62136,11.412595 22.16212,32.029315 21.12571,34.730159 -0.24084,0.62763 -2.89973,2.76211 -5.90864,4.74329 -5.76273,3.79441 -35.23739,21.08933 -37.27148,21.86988 -0.85085,0.32651 -2.612,-1.88608 -6.1999,-7.78909 C 177.01599,97.826074 164.68101,86.598282 147.6,80.887482 120.98927,71.99055 93.595535,78.640288 73.999999,98.753634 c -27.288872,28.009986 -27.0667,71.162966 0.508349,98.738016 20.403435,20.40344 50.189582,26.6118 76.317192,15.90687 5.31427,-2.17734 33.02491,-17.95815 155.57446,-88.59733 83.80011,-48.303504 175.88199,-101.059621 192.441,-110.254479 9.59693,-5.3289677 21.2121,-9.5012534 34.15801,-12.2698951 11.95687,-2.5571234 34.23812,-2.55069682 46.20098,0.013326 25.88818,5.54866 47.5361,17.1290841 65.2,34.8783471 17.10884,17.191517 27.2199,35.164813 32.85375,58.400432 6.64463,27.404369 3.18529,59.522979 -9.05061,84.031079 -18.19692,36.44788 -51.25668,60.72337 -92.60314,67.99768 -16.90093,2.97348 -41.49563,1.0882 -58.02422,-4.44777 -15.73707,-5.27088 -26.63497,-11.79503 -38.5638,-23.08667 -5.75482,-5.44741 -6.88896,-6.20065 -8.24249,-5.47425 -17.57585,9.43239 -249.0311,143.83985 -255.96948,148.64302 -9.52732,6.5954 -14.88473,17.35047 -14.91984,29.95179 -0.0216,7.74076 0.97948,11.93484 4.39315,18.40581 8.57327,16.25154 28.85189,24.38288 45.19522,18.12242 4.77129,-1.82769 30.75668,-16.29862 77.73147,-43.28767 78.89243,-45.32712 82.03966,-46.96081 96.44872,-50.06572 8.85996,-1.90917 30.34771,-1.91963 39.07763,-0.019 20.50686,4.46459 41.36347,17.87925 54.13606,34.81952 11.11045,14.73577 18.32815,36.33232 18.32815,54.84087 0,26.49144 -13.16261,54.48725 -33.40381,71.04721 C 494.6271,502.90477 472.99296,515.61481 314,607.3718 c -106.5795,61.50847 -116.7167,67.21809 -117.99119,66.45667 -0.66484,-0.39721 -4.43721,-5.56109 -8.38303,-11.47531 -13.98663,-20.96397 -28.97404,-32.47157 -47.36605,-36.36852 -7.00402,-1.48403 -23.84116,-1.49989 -30.78095,-0.029 -20.344637,4.31209 -39.110886,18.91766 -48.577158,37.8071 -5.938571,11.85011 -8.486951,27.7896 -6.55518,41.00106 6.43406,44.0028 50.660848,71.0843 93.152878,57.04053 6.77782,-2.2401 23.74366,-11.81814 150.50068,-84.96503 96.07005,-55.43856 191.40478,-109.92753 202.39999,-115.68258 10.70068,-5.6009 19.84029,-9.03234 30,-11.26342 9.54178,-2.09538 40.22478,-2.1113 50.67142,-0.0263 43.1514,8.61245 79.35159,41.00296 93.67924,83.82054 3.98409,11.90627 5.32553,21.53803 5.32208,38.21347 -0.002,13.505 -0.77398,22.3988 -2.54056,29.299 -10.72556,41.89379 -40.74054,74.56285 -81.55896,88.77081 -12.83495,4.46755 -20.20333,5.49335 -39.97322,5.56495 -19.14727,0.0694 -24.24863,-0.65624 -38.91541,-5.53515 -26.52304,-8.82289 -49.74283,-26.82473 -65.55422,-50.82293 -8.61645,-13.07786 -11.4123,-18.71774 -10.21773,-20.61153 1.28788,-2.04171 8.22719,-6.53082 26.82204,-17.35147 l 17.0443,-9.91834 1.32171,2.15183 c 0.72694,1.1835 3.37422,5.49922 5.88286,9.59046 16.76824,27.3468 36.21264,39.36139 63.70248,39.36139 15.04357,0 27.10214,-3.53623 38.84804,-11.39237 26.62555,-17.80826 38.42463,-50.34809 28.93859,-79.80763 -7.52828,-23.3796 -26.79955,-41.6664 -50.67266,-48.08407 -8.58138,-2.30688 -24.60973,-2.49402 -32.8,-0.38295 -10.54336,2.71759 -13.86686,4.53712 -119.2,65.2588 -195.81539,112.88224 -245.24837,140.82702 -255.99465,144.7155 -12.09021,4.37472 -20.64104,5.72464 -38.40534,6.06296 -8.8,0.1676 -17.08,0.13888 -18.4,-0.064 z" fill="currentColor" />
  </Icon>
);

export default AgoraIcon;