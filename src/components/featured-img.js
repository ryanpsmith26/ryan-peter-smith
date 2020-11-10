import React from 'react';

const FeaturedImg = () => {
	return <img src={require('../images/outlier-wash-crop.jpeg')} style={styles.img} />;
};

export default FeaturedImg;

const styles = {
	img: {
		position: 'absolute',
		top: 0,
		zIndex: -1
	}
};
