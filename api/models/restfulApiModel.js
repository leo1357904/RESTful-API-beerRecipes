'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var beerSchema = new Schema({
		BeerID: Number,
		Name: String,
        URL: String,
        Style: String,
        StyleID: Number,
        'Size(L)': Number,
        OG: Number,
        FG: Number,
        ABV: Number,
        IBU: Number,
        Color: Number,
        BoilSize: Number,
        BoilTime: Number,
        BoilGravity: Number,
        Efficiency: Number,
        MashThickness: Number,
        SugarScale: String,
        BrewMethod: String,
        PitchRate: Number,
        PrimaryTemp: Number,
        PrimingMethod: String,
        PrimingAmount: String
  },{collection: "beerRecipe"},{ versionKey: false });

module.exports = mongoose.model('beerRecipe', beerSchema);