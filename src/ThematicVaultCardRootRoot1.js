import React from "react";
import styled from "styled-components";

export const ThematicVaultCardRootRoot1 = ({
  name, price, aer, sdgs, region, numProjects, walletBalance, rating
}) => {
  const TradeButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ThematicVaultCardRootRootRoot>
      <VaultHeader>
        <VaultHeaderImage>
          <PriceAction>
            <Label>Price per ton</Label>
            <DataText>{price}</DataText>
            <LineChartJeanWhite
              src={`https://file.rendit.io/n/tnbbPSwpyOGWbTy1gb7K.svg`}
            />
          </PriceAction>
        </VaultHeaderImage>
      </VaultHeader>
      <VaultDetails>
        <TitleRow>
          <VaultNameText>{name}</VaultNameText>
          <TradeButton onClick={(e) => TradeButtonFunction(e, "TradeButton")}>
            <TradeText>Trade</TradeText>
          </TradeButton>
        </TitleRow>
        <MiddleRow>
          <EmissionsRecuction>
            <BlackFlexRow>
              <Label>Annual Emission Reductions</Label>
            </BlackFlexRow>
            <BlackFlexRow1>
              <DataText>{aer}</DataText>
            </BlackFlexRow1>
          </EmissionsRecuction>
          <SDGs>
            <FlexRow>
              <Label>Sustainable Development Goals</Label>
            </FlexRow>
            <SDGIcons>
              {[
                {
                  src: `https://file.rendit.io/n/OTXGylUwLTpTTjVifCCf.png`,
                },
                {
                  src: `https://file.rendit.io/n/H1gZHNep9nu081R8z0g8.png`,
                },
                {
                  src: `https://file.rendit.io/n/615pyMV5xYfMcphwEghW.png`,
                },
                {
                  src: `https://file.rendit.io/n/GPZ9dhuslzpdVrohKo0t.png`,
                },
              ].map((data) => (
                <SDG src={data.src} />
              ))}
            </SDGIcons>
          </SDGs>
        </MiddleRow>
        <BottomRow>
          <BlackFlexColumn>
            <Label>Region</Label>
            <FlexColumn>
              <DataText>{region}</DataText>
            </FlexColumn>
          </BlackFlexColumn>
          <BlackFlexColumn1>
            <Label># Projects</Label>
            <DataText>{numProjects}</DataText>
          </BlackFlexColumn1>
          <BlackFlexColumn>
            <Label>My Wallet</Label>
            <DataText>{walletBalance} </DataText>
          </BlackFlexColumn>
          <BlackFlexColumn>
            <GreenLabel>Rating</GreenLabel>
            <GreenData>{rating}</GreenData>
          </BlackFlexColumn>
        </BottomRow>
      </VaultDetails>
    </ThematicVaultCardRootRootRoot>
  );
};

const SDG = styled.img`
  width: 12px;
  height: 12px;
`;
const BlackFlexColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #252927;
`;
const ThematicVaultCardRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background-color: #1e2220;
`;
const VaultHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const VaultHeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 30px 11px 381px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/gya06LZVjdqWzmI5lp8A.png");
`;
const PriceAction = styled.div`
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0px 10px 0px;
  border-radius: 6px;
  background-color: #252927;
`;
const Label = styled.div`
  width: 107px;
  height: 13.5px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.38);
  font-size: 6px;
  font-family: Rubik;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const DataText = styled.div`
  width: 107px;
  height: 13.5px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.72);
  font-size: 8px;
  font-family: Rubik;
  line-height: 27px;
  text-align: center;
`;
const LineChartJeanWhite = styled.img`
  width: 54.5px;
  height: 16.5px;
  align-self: center;
`;
const VaultDetails = styled.div`
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;
`;
const TitleRow = styled.div`
  height: 46.3px;
  gap: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
`;
const VaultNameText = styled.div`
  width: 219px;
  height: 46.3px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.92);
  font-size: 16px;
  font-weight: 700;
  font-family: Rubik;
  line-height: 36px;
  text-align: center;
  white-space: nowrap;
`;
const TradeButton = styled.button`
  width: 215px;
  height: 38.3px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-width: 0px;
  border-radius: 10px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: content-box;
  background-color: transparent;
  background-image: linear-gradient(
    94deg,
    #00c864 0%,
    rgba(12, 149, 81, 0.5) 176%
  );
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const TradeText = styled.div`
  width: 348px;
  height: 34.3px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  font-family: Rubik;
  line-height: 27px;
  text-align: center;
`;
const MiddleRow = styled.div`
  height: 46.3px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
const EmissionsRecuction = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
const BlackFlexRow = styled.div`
  height: 23.2px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  background-color: #252927;
`;
const BlackFlexRow1 = styled.div`
  height: 23.2px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  background-color: #252927;
`;
const SDGs = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2px 0px;
  background-color: #252927;
`;
const FlexRow = styled.div`
  height: 13.2px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  padding: 4px 0px;
`;
const SDGIcons = styled.div`
  width: 224px;
  height: 21.2px;
  gap: 5px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const BottomRow = styled.div`
  height: 46.3px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn = styled.div`
  height: 23.2px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;
const BlackFlexColumn1 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #252927;
`;
const GreenLabel = styled.div`
  width: 107px;
  height: 23.2px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #00c864;
  font-size: 7px;
  font-family: Rubik;
  line-height: 10px;
  text-align: center;
  text-transform: uppercase;
`;
const GreenData = styled.div`
  width: 107px;
  height: 23.2px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #00c864;
  font-size: 12px;
  font-family: Rubik;
  line-height: 27px;
  text-align: center;
`;
