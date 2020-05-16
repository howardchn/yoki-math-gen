import { 
  randomMultipleLv1, 
  randomMultipleLv2,
  randomDivideLv1, 
  randomDivideWithModLv1, 
  randomPlusMinusExamLv2, 
  randomMixedMultiAndDivideLv1,
  randomMix
} from './examsGen'

export default [
    // {
    //   id: 1,
    //   name: '基础乘法练习',
    //   href: '/multi-simple',
    //   gen: randomMultipleLv1
    // }, {
    {
        id: 1,
        name: '基础乘法练习Lv2',
        href: '/multi-simple-lv2',
        gen: randomMultipleLv2
    }, {
      id: 3,
      name: '基本除法练习',
      href: '/devide-simple',
      gen: randomDivideLv1
    }, {
      id: 5,
      name: '基本除法练习（带余数）',
      href: '/devide-simple-mod',
      gen: randomDivideWithModLv1
    }, {
      id: 4,
      name: '基本乘法除法混合练习',
      href: '/multi-devide-simple',
      gen: randomMixedMultiAndDivideLv1
    }, {
      id: 2,
      name: '1000以下加减混合练习',
      href: '/addmin-b1k',
      gen: randomPlusMinusExamLv2
    }, {
      id: 100,
      name: '综合混合练习',
      href: '/mix-latest',
      gen: randomMix
    }
]