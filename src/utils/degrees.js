const DEGREE_OPTIONS = {
  bachelor: 'دانشجوی کارشناسی',
  master: 'دانشجوی کارشناسی ارشد',
  doctorate: 'دانشجوی دکتری',
  postdoc: 'دانشجوی فوق دکتری',
  graduate: 'فارغ التحصیل',
};

export function academic_degree(degree) {
  return DEGREE_OPTIONS[degree]
}