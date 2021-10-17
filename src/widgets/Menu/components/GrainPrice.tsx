import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  grainPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const GrainPrice: React.FC<Props> = ({ grainPriceUsd }) => {
  console.log("from uikit, grainPriceUsd", grainPriceUsd);
  return grainPriceUsd ? (
    <PriceLink
      href="https://charts.bogged.finance/0x3993a8f82F5e1a5381E678Fc237a3da668C1F4eB"
      target="_blank"
    >
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${grainPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <PriceLink
      href="https://charts.bogged.finance/0x3993a8f82F5e1a5381E678Fc237a3da668C1F4eB"
      target="_blank"
    >
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>
        undefined
      </Text>
    </PriceLink>
  );
};

export default React.memo(GrainPrice);
