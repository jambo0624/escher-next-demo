import { useEffect } from 'react';
import { Builder, libs } from 'escher';

const EscherMap = ({ map, model, reactionData }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      libs.d3_select('#root').node().innerHTML = '';
      new Builder( // eslint-disable-line no-new
        map,
        model,
        null,
        libs.d3_select('#root'),
        {
          fill_screen: true,
          never_ask_before_quit: true,
          show_reaction_data_animation: true,
          scroll_behavior: 'zoom',
          reaction_data: reactionData,
        }
      );
    }
  }, [map, model, reactionData]);
  return <div id="root" style={{
    position: "absolute",
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto",
  }}></div>;
};

export default EscherMap;