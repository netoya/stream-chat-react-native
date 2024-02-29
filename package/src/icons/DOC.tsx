import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import { IconProps, RootPath, RootSvg } from './utils/base';

export const DOC = (props: IconProps) => (
  <RootSvg
    height={props.height || 40}
    viewBox={props.viewBox || '0 0 34 40'}
    width={props.width || 34}
    {...props}
  >
    <RootPath
      d='M0 3.99A3.99 3.99 0 013.99 0h19.285l9.975 9.975V35.91a3.99 3.99 0 01-3.99 3.99H3.99A3.99 3.99 0 010 35.91V3.99z'
      pathFill='url(#gradient)'
    />
    <RootPath
      d='M26.624 9.965a3.298 3.298 0 01-3.298-3.299V.058l9.92 9.907h-6.622z'
      pathFill='#254A80'
    />
    <RootPath
      d='M13.162 34.33c0 .159-.015.312-.045.46a1.29 1.29 0 01-.148.401.79.79 0 01-.282.275.816.816 0 01-.43.104.825.825 0 01-.424-.104 1.045 1.045 0 01-.29-.282 1.311 1.311 0 01-.163-.4 1.955 1.955 0 01-.052-.446c0-.159.015-.31.045-.453.035-.148.087-.28.156-.393a.855.855 0 01.29-.275.857.857 0 01.437-.104c.173 0 .317.035.43.104a.81.81 0 01.275.275c.074.109.126.237.156.386.03.143.045.294.045.452zm.014 1.44v.49h1.002v-5.299h-1.054v1.93h-.014a1.103 1.103 0 00-.49-.423 1.453 1.453 0 00-.646-.149 1.59 1.59 0 00-1.277.609 2.034 2.034 0 00-.318.638 2.64 2.64 0 00-.104.742c0 .267.034.525.104.772.074.247.18.468.319.66.143.188.324.34.541.453.218.11.47.163.757.163.253 0 .478-.044.676-.133.203-.094.366-.245.49-.453h.014zm2.734-1.425c0-.153.015-.304.044-.452.03-.149.08-.28.149-.394a.855.855 0 01.29-.274.826.826 0 01.445-.112c.178 0 .326.037.445.112.124.069.22.16.29.274.073.114.125.245.155.394a2.301 2.301 0 010 .905c-.03.143-.082.275-.156.393a.774.774 0 01-.29.275.872.872 0 01-.444.104.872.872 0 01-.446-.104.855.855 0 01-.29-.275 1.294 1.294 0 01-.148-.393c-.03-.148-.044-.3-.044-.453zm-1.054 0c0 .307.047.584.141.831.094.248.228.46.4.639.174.173.382.306.624.4.243.094.515.141.817.141.301 0 .573-.047.816-.14.247-.095.458-.228.63-.401.174-.178.308-.391.402-.639.093-.247.14-.524.14-.83 0-.307-.047-.584-.14-.832a1.756 1.756 0 00-.401-.638 1.717 1.717 0 00-.631-.408 2.141 2.141 0 00-.816-.149c-.302 0-.574.05-.817.149a1.756 1.756 0 00-1.024 1.046 2.325 2.325 0 00-.14.831zm7.268-.571h1.032a1.417 1.417 0 00-.178-.638 1.379 1.379 0 00-.409-.453 1.664 1.664 0 00-.564-.275 2.365 2.365 0 00-.653-.089c-.311 0-.588.052-.831.156-.242.104-.448.25-.616.438a1.863 1.863 0 00-.386.66 2.59 2.59 0 00-.126.824c0 .287.047.552.141.794.094.238.225.443.393.616.169.173.371.31.609.408.242.094.507.141.794.141.51 0 .928-.133 1.254-.4.327-.267.525-.656.594-1.165H22.16a1.007 1.007 0 01-.26.571c-.133.139-.326.208-.578.208a.745.745 0 01-.416-.111.879.879 0 01-.275-.283 1.43 1.43 0 01-.14-.393 2.09 2.09 0 010-.853c.029-.149.078-.282.148-.401a.901.901 0 01.282-.297.723.723 0 01.423-.119c.45 0 .71.22.78.66z'
      pathFill='#FFFFFF'
    />
    <RootPath
      d='M7.98 14.131V12.47h14.962v1.662H7.98zm9.975 1.663H7.98v1.662h9.975v-1.662zM7.98 20.78h14.962V19.12H7.98v1.662z'
      pathFill='#FFFFFF'
      pathOpacity={0.4}
    />
    <Defs>
      <LinearGradient
        gradientUnits='userSpaceOnUse'
        id='gradient'
        x1={0}
        x2={0}
        y1={0}
        y2={props.height || 40}
      >
        <Stop stopColor='#5E7FB0' />
        <Stop offset={1} stopColor='#2C5898' />
      </LinearGradient>
    </Defs>
  </RootSvg>
);
