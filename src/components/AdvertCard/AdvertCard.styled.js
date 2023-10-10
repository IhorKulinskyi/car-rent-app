import styled from "@emotion/styled";

export const ImgWrapper = styled.div`
  position: relative;
  height: 268px;
  margin-bottom: 8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const AdvertImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 0;
  margin-bottom: 24px;
  word-wrap: break-word;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  height: 42px;
`;

export const DetailsListItem = styled.li`
  padding: 2.5px 5px;
  &:not(:last-child) {
    border-right: 1px solid #12141780;
  }
`;

export const Details = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 0.7;
  color: #12141780;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DescriptionItem = styled.p`
  ${({ isModel }) =>
    isModel &&
    "flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"};
`;

export const ModalContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
