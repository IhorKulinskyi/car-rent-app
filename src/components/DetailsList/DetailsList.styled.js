import styled from "@emotion/styled";

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