import styled from '@emotion/styled';

export const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 0 10px 100px 10px;
`;

export const Header = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;

  color: var(--main-text-color);

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.span`
  color: var(--accent-text-color);
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);

  margin-bottom: 30px;
`;
