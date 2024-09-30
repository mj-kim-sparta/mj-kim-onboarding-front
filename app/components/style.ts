"use client";
import styled from "@emotion/styled";
import { scc, Button } from "@teamsparta/design-system";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GnbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 40px;
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
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 40px 0;
`;

export const Cta = styled.button`
`

export const SubmitButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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

