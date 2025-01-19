export const getObserver = (callback) => {
  return new IntersectionObserver(callback, {
    root: null, // viewport 기준
    rootMargin: '0px', // 추가 마진
    threshold: 0.1, // 요소가 10% 보일 때 callback 호출
  });
};
