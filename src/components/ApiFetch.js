import React from 'react';
import styled from 'styled-components';


const ApiFetch = ({ fetchData }) => {
    return (
      <Container>
        {fetchData.map((data) => (
          <Image key={data.id}>
            <ImageWrapper href={data.url} target="_blank" rel="noopener noreferrer">
              <ImageContent src={data.image} alt="画像を表示できません" />
            </ImageWrapper>
            <Info>
              <Name>{data.name}</Name>
              <Price>{data.price}</Price>
            </Info>
          </Image>
        ))}
      </Container>
    );
  };
  
  export default ApiFetch;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 300px;
`;

const ImageWrapper = styled.a`
  display: block;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

