"use client"
import styled from "@emotion/styled";
import { wTitle1, neutralDay, Flex, Button } from "@teamsparta/design-system";
import {forDesktop} from "@/app/components/device";

// export const Container = styled(Flex.Column)`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export const GnbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const GnbCategoryContainer = styled(Flex.Row)`
  gap: 30px !important;
  display: none !important;
  ${forDesktop} {
    display: flex !important;
  }
`;

export const GnbSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const GnbWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  ${wTitle1}
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0 40px 0;
`;

export const SubmitButton = styled(Button)<{error: boolean}>`
    width: 100px;
    ${({error}) => error && `
    background-color: ${neutralDay.gray50} !important;
    color: #000 !important;
    `
  }
`

export const ErrorButton = styled.button`
    width: max-content;
    padding: 0 10px;
    height: 40px;
    background-color: ${neutralDay.gray50};
    color: #000;
    border-radius: 5px;
    border: 1px solid black;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  gap: 10px;
`

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  `