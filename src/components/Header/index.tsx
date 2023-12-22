import React from 'react'
import { View } from 'react-native'
import Logo from '../../assets/Logo.svg'

export function Header() {

  return (
    <View className="bg-dark justify-center items-center h-48">
      <Logo />
    </View>
  );
}

export default Header