import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';

import {
  Container,
  CartButtom,
  CartButtomText,
  CartPricing,
  CartTotalPrice,
} from './styles';

const FloatingCart = () => {
  const navigation = useNavigation();
  const products = useSelector(({ cart }) => cart);
  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  }, [products]);

  return (
    <Container>
      <CartButtom onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtomText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </CartButtomText>
        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>
        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButtom>
    </Container>
  );
};

export default FloatingCart;
