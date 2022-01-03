const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://";

const ethMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "0x10fD6725Ca9597945F9310Ac794d109c4D4f6032",
      share: 1000,
    }
  ],
};

// If you have selected  then the collection starts from 0 automatically
//
const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Background" },
      { name: "Bear/Fur" },
      { name: "Bear/Mouth" },
      { name: "Headwear" },
      { name: "Eyes" },
      { name: "Cloth" },
    ],
   
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Moose/Fur" },
      { name: "Moose/Mouth" },
      { name: "Headwear" },
      { name: "Eyes" },
      { name: "Cloth" },
    ],
   
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Background" },
      { name: "Caribou/Fur" },
      { name: "Caribou/Mouth" },
      { name: "Headwear" },
      { name: "Eyes" },
      { name: "Cloth" },
    ],
   
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Background" },
      { name: "Canadian Goose/Fur" },
      { name: "Canadian Goose/Mouth" },
      { name: "Headwear" },
      { name: "Eyes" },
      { name: "Cloth" },
    ],
   
  },
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Background" },
      { name: "Beaver/Fur" },
      { name: "Beaver/Mouth" },
      { name: "Headwear" },
      { name: "Eyes" },
      { name: "Cloth" },
    ],
   
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 500,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  ethMetadata,
  gif,
  preview_gif,
};
