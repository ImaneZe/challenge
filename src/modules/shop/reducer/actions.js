import {LIKE_SHOP, DISLIKE_SHOP} from "./actionTypes";

/**
 * Like a shop
 * @param {Object} id 
 */
export const like = id => {
    return {
        type: LIKE_SHOP,
        id: id
    };
};

/**
 * Disike a shop
 * @param {Object} id 
 */
export const dislike = id => {
    return {
        type: DISLIKE_SHOP,
        id: id
    };
};
