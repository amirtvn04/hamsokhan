const DEGREE_OPTIONS = {
  bachelor: 'کارشناسی',
  master: 'کارشناسی ارشد',
  doctorate: 'دکتری تخصصی',
  postdoc: 'فوق دکتری',
};

export function academic_degree(degree) {
  return DEGREE_OPTIONS[degree]
}