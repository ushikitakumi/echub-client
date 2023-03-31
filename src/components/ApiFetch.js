import React from 'react';
import styled from 'styled-components';

const ApiFetch = ({ fetchData }) => {
  return (
    <Container>
      {fetchData.map((data) => (
        <Card key={data.id}>
          <ImageWrapper href={data.url} target="_blank" rel="noopener noreferrer">
            <ImageContent src={data.image} alt="画像を表示できません" />
          </ImageWrapper>
          <Info>
            <Name>{data.name}</Name>
            <Price>{data.price}</Price>
          </Info>
        </Card>
      ))}
    </Container>
  );
};

export default ApiFetch;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const ImageWrapper = styled.a`
  display: block;
  width: 100%;
  padding-top: 100%; // 縦横比を1:1に保つ
  position: relative;
  overflow: hidden;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; // 画像をImageWrapperに対して絶対配置
  top: 0;
  left: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: #f8f8f8;
  width: 100%;
`;

const Name = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Price = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
