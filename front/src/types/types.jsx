import PropTypes from "prop-types";

export const imageType = PropTypes.shape({
  fileId: PropTypes.number.isRequired,
  file: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }),
});

export const likeType = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  date: PropTypes.string.isRequired,
});

export const postType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageType).isRequired,
  createdAt: PropTypes.string.isRequired,
  editedAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(likeType).isRequired,
});

const userType = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  avatar: imageType,
  posts: PropTypes.arrayOf(postType),
};

userType.friends = PropTypes.arrayOf(PropTypes.shape(userType));
export const userDataType = PropTypes.shape(userType);
