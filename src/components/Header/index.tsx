import React from 'react'
import { View } from 'react-native'
import Logo from '../../assets/Logo.svg'

export function Header() {

  return (
    <View className="bg-dark justify-center items-center">
      <View className="pt-12 h-32">
        <Logo />
      </View>
    </View>
  );
}

export default Header