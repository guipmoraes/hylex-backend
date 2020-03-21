const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema( {
 uuid: {
   type: String,
   required: true,
 },
 nickname: {
  type: String,
  required: true,
},
discord: {
  account_id:  {
    type: String,
    required: false,
    default: null,
  },
  account_situation: {
    type: String,
    required: false,
    default: "UNLINKED",

  },
  link_token: {
    type: String,
    required: false,
    default: null,
  }

},
 stats: {
  rank: {
    type: String,
    required: false,
  },
  prestige: {
    type: Number,
    required: false,
  },
  historic: {
    type: Array,
    required: false,
  },
  kill_actual_rank: {
    type: Number,
    required: false,
    default: 0,
  },
  break_actual_rank: {
    type: Number,
    required: false,
    default: 0,
  }
}

 
});

 mongoose.model('Users_Rankup', UserSchema);