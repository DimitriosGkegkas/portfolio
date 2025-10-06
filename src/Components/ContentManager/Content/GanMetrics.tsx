import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const GanMetrics: FC = () => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3.2}>
      <Scroll>
        <Item url={asset("/projects/meteo/meteo1.png")} position={[width < 20 ? width / 2.2 : 0, 0, 20]} scale={19} />
        <Item url={asset("/projects/meteo/meteo2.png")} position={[width < 20 ? width / 2.2 : 0, -height, 20]} scale={19} />
        <Item url={asset("/projects/meteo/meteo3.png")} position={[ 0, -height * 2, 10]} scale={20} />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={10}>
          🎨 <span style={{ color: "#60A5FA" }}>GAN Metrics for Image Quality Evaluation</span> - Interactive AI Validation
        </ItemDiv>
        <ItemDiv offset={55}>
          🎓 <span style={{ color: "#FBBF24" }}>Master's Thesis</span> at NTUA - Advanced AI Research
        </ItemDiv>
        <ItemDiv offset={95}>
          🤖 Developed <span style={{ color: "#F472B6" }}>interactive validation framework</span> for AI models
        </ItemDiv>
        <ItemDiv offset={135}>
          👥 Integrated <span style={{ color: "#34D399" }}>user feedback mechanisms</span> for model evaluation
        </ItemDiv>
        <ItemDiv offset={175}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>Python</span>, <span style={{ color: "#A78BFA" }}>TensorFlow</span>, and <span style={{ color: "#A78BFA" }}>PyTorch</span>
        </ItemDiv>
        <ItemDiv offset={215}>
          📊 Created <span style={{ color: "#6EE7B7" }}>comprehensive GAN metrics</span> for quality assessment
        </ItemDiv>
        <ItemDiv offset={255}>
          🔬 Advanced research in <span style={{ color: "#F59E0B" }}>computer vision</span> and <span style={{ color: "#F59E0B" }}>machine learning</span>
        </ItemDiv>
        <ItemDiv offset={295}>
          🚀 Contributed to <span style={{ color: "#EC4899" }}>AI model evaluation</span> methodologies
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};