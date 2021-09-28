import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

import * as S from "./styles";

type DropdownProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
};

export function Dropdown(props: DropdownProps) {
  const toggle = () => props.setIsOpen((isOpen) => !isOpen);

  return (
    <S.Wrapper>
      <S.Label onClick={toggle}>
        {props.label}
        {props.isOpen ? (
          <ChevronUpIcon width="1rem" />
        ) : (
          <ChevronDownIcon width="1rem" />
        )}
      </S.Label>
      {props.isOpen && <S.Dropdown>{props.children}</S.Dropdown>}
    </S.Wrapper>
  );
}
