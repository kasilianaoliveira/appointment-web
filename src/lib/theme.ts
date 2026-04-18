import type { ThemeConfig } from 'antd'

// Cores base do design system
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blueDark: '#0F2243',
  dark: '#26262A',
  grey: '#C3C3C3',
  gray: '#666666',
  grayLight: '#F5F5F5',

  pink: '#F7CBD7',
  yellow: '#FDF1C3',
  green: '#DCFFEA',
  blue: '#00B6E0',
  
  linearYellowGradiente: 'linear-gradient(-54.631deg, #FF7800 0%, #FFBE00 100%)',
  linearGreenGradiente: 'linear-gradient(-56.158deg, #043E29 0%, #62E4A5 100%)',
  linearBlueGradiente: 'linear-gradient(-54.631deg, #1F85E9 0%, #00B6E0 100%)',
  linearPinkGradiente: 'linear-gradient(-54.631deg, #F83E93 0%, #FF5F6E 100%)',
} as const

export type ColorKeys = keyof typeof colors

// Função para obter cores do tema
export const getThemeColors = () => colors

export const themeConfig: ThemeConfig = {
  token: {
    // Cores principais
    colorPrimary: colors.blueDark,
    // colorSuccess: '#52c41a',
    // colorWarning: '#faad14',
    // colorError: '#ff4d4f',
    colorInfo: colors.blueDark,



    // Espaçamentos e bordas
    borderRadius: 40,
    borderRadiusSM: 20,
    borderRadiusLG: 30,



    // Tipografia
    fontSize: 16,
    fontSizeSM: 12,
    fontSizeLG: 18,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,

    // Espaçamentos
    padding: 16,
    paddingSM: 12,
    paddingLG: 24,
    paddingXL: 32,

    margin: 16,
    marginSM: 12,
    marginLG: 24,
    marginXL: 32,

  },
  components: {
    Button: {
      // borderRadius: 30,
      // borderRadiusSM: 20,
      // borderRadiusLG: 30,
      controlHeight: 40,
      controlHeightSM: 32,
      controlHeightLG: 48,
    },
    Input: {
      // borderRadius: 10,
      // controlHeight: 40,
      // controlHeightSM: 32,
      // controlHeightLG: 48,
    },
    Form: {
      itemMarginBottom: 16,
      verticalLabelPadding: '0 0 8px',
    },
    Card: {
      borderRadius: 12,
      borderRadiusLG: 16,
    },
    Modal: {
      borderRadius: 12,
      borderRadiusLG: 16,
    },
    Drawer: {
      borderRadius: 12,
    },
    Table: {
      borderRadius: 8,
    },
    Select: {
      borderRadius: 8,
      controlHeight: 40,
      controlHeightSM: 32,
      controlHeightLG: 48,
    },
    Checkbox: {
      borderRadiusSM: 4,
    },
    Radio: {
      radioSize: 16,
    },
  },
}

// Cores customizadas para uso em componentes (mantido para compatibilidade)
export const themeColors = colors