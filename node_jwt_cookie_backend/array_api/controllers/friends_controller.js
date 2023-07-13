const Friends = require("../models/friends_model");

const create_user = async (req, res) => {
  try {
    const { user } = req.body;
    await Friends.create({ user: user });
    const user_list = await Friends.find({});
    return res.status(200).json(user_list);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addFriend = async (req, res) => {
  try {
    const { id } = req.body;
    const user_data = await Friends.findById({ _id: id });

    if (
      user_data.friends_list.filter((fil) => fil.ID == id).length > 1 &&
      user_data._id == id
    ) {
      console.log("Already Friend!");
      return res.status(401).json({ message: "Already Friend!" });
    } else {
      const data = await Friends.findByIdAndUpdate(
        { _id: id },
        { friends_list: { ID: id } }
      );
      return res.status(200).json(data);
      // user_data.Friends.push({ ID: id });
    }

    // if (user_data.friends_list.includes(id)) {
    //   user_data.firends_list = user_data.friends_list.filter(
    //     (id) => id !== _id
    //   );
    // } else {
    //   user_data.Friends.push(id);
    // }
    // await user_data.save();

    // const user_friends = await Promise.all(
    //   user_data.firends_list.map((id) => Friends.findById(id))
    // );

    // const formattedList = user_friends.map(({ _id, user }) => {
    //   return { _id, user };
    // });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { create_user, addFriend };
