import React from 'react';
import { brandSizes, brandVariants } from '../../../constants/brand';
import { Images } from '../../../themes';
import * as S from './Brand.styles';


const Brand = ({
  size = brandSizes.LARGE,
  variant = brandVariants.ORIGINAL,
  customStyles = '',
}) => {
  return (
    <S.Wrapper
      size={size}
      customStyles={customStyles}
    >
      <S.Image src={Images.brandOriginal}/>
    </S.Wrapper>
  )
};

export default Brand;
