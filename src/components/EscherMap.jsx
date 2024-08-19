import { useEffect } from 'react';
import { Builder, libs } from 'escher';

const EscherMap = ({ map, model }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new Builder( // eslint-disable-line no-new
        map,
        model,
        null,
        libs.d3_select('#root'),
        {
          fill_screen: true,
          never_ask_before_quit: true,
          scroll_behavior: 'zoom',
        }
      );
    }
  }, [map, model]);

  return <div id="root" style={{
    position: "absolute",
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto",
  }}></div>;
};

export default EscherMap;