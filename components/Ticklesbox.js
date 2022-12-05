import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import Tickles from "./Tickles";

const TicklesContainer = styled.View`
  flex: 9;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 15px;
`;

const TicklesHed = styled.Text`
  font-size: 15px;
  margin-left: 33px;
  margin-bottom: 12px;
`;

//////////////////
const Ticklesbox = ({
  weekData,
  ticklesData,
  numWeeks,
  numWeeksArray,
  tickleSwiper,
}) => {
  const ticklesRef = useRef(null);
  const oldIndex = useRef(numWeeks - 1);

  useEffect(() => {
    if (ticklesRef.current) {
      tickleSwiper.current = ticklesRef.current;
    }
  }, [ticklesRef]);

  //////////////////
  return (
    <TicklesContainer>
      <TicklesHed>{ticklesData.name}</TicklesHed>
      <Swiper
        index={numWeeks - 1}
        horizontal
        containerStyle={{
          width: "100%",
          height: "100%",
          marginBottom: 30,
        }}
        showsButtons={false}
        showsPagination={false}
        slidesPerView={1}
        scrollEnabled={false}
        ref={ticklesRef}
      >
        {numWeeksArray.map((_, i) => {
          return (
            <Tickles
              dates={weekData.slice(7 * i, 7 * (i + 1))}
              data={ticklesData}
              key={"tickle" + i}
            />
          );
        })}
      </Swiper>
    </TicklesContainer>
  );
};

export default Ticklesbox;