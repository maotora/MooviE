import React from 'react';
import { Platform, Dimensions } from 'react-native';


export const SECURE_BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
export const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p';
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const API_KEY = 'd7df7fe9230afac6418abaf5c5de2e88';
export const MATERIAL_BLUE = '#2196F3';
export const THEME_GREEN = '#006064';
export const THEME_DARK = '#081c24';
export const IOS_BLUE = '#007AFF';

export const base = {
  FONT_SIZE_TINY: 8,
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 18,
  FONT_SIZE_EXTRA_LARGE: 24,
  FONT_SIZE_MASSIVE: 34,

  FONT_WEIGHT_LIGHT: "200",
  FONT_WEIGHT_MEDIUM: "500",
  FONT_WEIGHT_BOLD: "700",

  PRIMARY_FONT_FAMILY: "AvertaDemo-Regular",
  PRIMARY_FONT_FAMILY_BOLD: "AvertaDemo-ExtraBoldItalic",

  SECONDARY_FONT_FAMILY: "Product-Sans-Regular",
  SECONDARY_FONT_FAMILY_ITALIC: "Product-Sans-Italic"
};

export const darkTheme = {
  PRIMARY_BACKGROUND_COLOR: "#3d3d3d",
  PRIMARY_BACKGROUND_COLOR_LIGHT: "#797979",

  SECONDARY_BACKGROUND_COLOR: "#ffffff",
  SECONDARY_BACKGROUND_COLOR_LIGHT: "#f7f7f7",

  PRIMARY_TEXT_COLOR: "#ffffff",
  PRIMARY_TEXT_COLOR_LIGHT: "#f7f7f7",
  SECONDARY_TEXT_COLOR: "#3d3d3d",
  PRIMARY_TEXT_BACKGROUND_COLOR: "#3d3d3d",
  SECONDARY_TEXT_BACKGROUND_COLOR: "#ffffff"
};
export const lightTheme = {
  PRIMARY_BACKGROUND_COLOR: "#ffffff",
  PRIMARY_BACKGROUND_COLOR_LIGHT: "#f7f7f7",

  SECONDARY_BACKGROUND_COLOR: "#3d3d3d",
  SECONDARY_BACKGROUND_COLOR_LIGHT: "#797979",

  PRIMARY_TEXT_COLOR: "#3d3d3d",
  PRIMARY_TEXT_COLOR_LIGHT: "#797979",
  SECONDARY_TEXT_COLOR: "#ffffff",
  PRIMARY_TEXT_BACKGROUND_COLOR: "#ffffff",
  SECONDARY_TEXT_BACKGROUND_COLOR: "#3d3d3d"
};

export const colorOptions = {
  orange: {
    PRIMARY_COLOR_FAINT: "#FFF3E0",
    PRIMARY_COLOR_LIGHT: "#FFB74D",
    PRIMARY_COLOR: "#FF9800",
    PRIMARY_COLOR_BOLD: "#EF6C00",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  red: {
    PRIMARY_COLOR_FAINT: "#FFEBEE",
    PRIMARY_COLOR_LIGHT: "#E57373",
    PRIMARY_COLOR: "#F44336",
    PRIMARY_COLOR_BOLD: "#C62828",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  blue: {
    PRIMARY_COLOR_FAINT: "#E3F2FD",
    PRIMARY_COLOR_LIGHT: "#64B5F6",
    PRIMARY_COLOR: "#2196F3",
    PRIMARY_COLOR_BOLD: "#1565C0",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  cyan: {
    PRIMARY_COLOR_FAINT: "#E0F7FA",
    PRIMARY_COLOR_LIGHT: "#4DD0E1",
    PRIMARY_COLOR: "#00BCD4",
    PRIMARY_COLOR_BOLD: "#00838F",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  teal: {
    PRIMARY_COLOR_FAINT: "#E0F2F1",
    PRIMARY_COLOR_LIGHT: "#4DB6AC",
    PRIMARY_COLOR: "#009688",
    PRIMARY_COLOR_BOLD: "#00695C",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  gray: {
    PRIMARY_COLOR_FAINT: "#FAFAFA",
    PRIMARY_COLOR_LIGHT: "#E0E0E0",
    PRIMARY_COLOR: "#9E9E9E",
    PRIMARY_COLOR_BOLD: "#424242",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  purlple: {
    PRIMARY_COLOR_FAINT: "#EDE7F6",
    PRIMARY_COLOR_LIGHT: "#9575CD",
    PRIMARY_COLOR: "#673AB7",
    PRIMARY_COLOR_BOLD: "#4527A0",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  },
  green: {
    PRIMARY_COLOR_FAINT: "#E8F5E9",
    PRIMARY_COLOR_LIGHT: "#81C784",
    PRIMARY_COLOR: "#4CAF50",
    PRIMARY_COLOR_BOLD: "#2E7D32",
    PRIMARY_FOREGROUND_COLOR: "#ffffff"
  }
};
