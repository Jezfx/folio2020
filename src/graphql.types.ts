export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  PrismicImageThumbnailsType: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type PrismicAllDocumentTypes = PrismicPage | PrismicHome | PrismicGlobal;

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified
   * via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
};


export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /**
   * The suggested cache lifetime for this resource, in seconds. Consumers may
   * choose to use this value or not. Fetched via oEmbed data.
   */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /**
   * The HTML required to display the resource. The HTML should have no padding or
   * margins. Consumers may wish to load the HTML in an off-domain iframe to avoid
   * XSS vulnerabilities. Fetched via oEmbed data.
   */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

export type PrismicGlobal = PrismicDocument & Node & {
  data?: Maybe<PrismicGlobalDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicGlobalFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicGlobalLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicGlobalArticlesGroupType = {
  title?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicGlobalArticlesGroupTypeFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicGlobalArticlesGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicGlobalArticlesGroupTypeFilterInput>;
};

export type PrismicGlobalBodyClients = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicGlobalBodyClientsPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicGlobalBodyClientsItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicGlobalBodyClientsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicGlobalBodyClientsEdge>;
  nodes: Array<PrismicGlobalBodyClients>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicGlobalBodyClientsGroupConnection>;
};


export type PrismicGlobalBodyClientsConnectionDistinctArgs = {
  field: PrismicGlobalBodyClientsFieldsEnum;
};


export type PrismicGlobalBodyClientsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicGlobalBodyClientsFieldsEnum;
};

export type PrismicGlobalBodyClientsEdge = {
  next?: Maybe<PrismicGlobalBodyClients>;
  node: PrismicGlobalBodyClients;
  previous?: Maybe<PrismicGlobalBodyClients>;
};

export type PrismicGlobalBodyClientsFieldsEnum = 
  'slice_type' |
  'slice_label' |
  'primary___clients_year' |
  'items' |
  'items___clients_name' |
  'items___clients_link___link_type' |
  'items___clients_link___isBroken' |
  'items___clients_link___url' |
  'items___clients_link___target' |
  'items___clients_link___size' |
  'items___clients_link___id' |
  'items___clients_link___type' |
  'items___clients_link___tags' |
  'items___clients_link___lang' |
  'items___clients_link___slug' |
  'items___clients_link___uid' |
  'items___clients_link___raw' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicGlobalBodyClientsFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicGlobalBodyClientsPrimaryTypeFilterInput>;
  items?: Maybe<PrismicGlobalBodyClientsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicGlobalBodyClientsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicGlobalBodyClientsEdge>;
  nodes: Array<PrismicGlobalBodyClients>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicGlobalBodyClientsItemType = {
  clients_name?: Maybe<Scalars['String']>;
  clients_link?: Maybe<PrismicLinkType>;
};

export type PrismicGlobalBodyClientsItemTypeFilterInput = {
  clients_name?: Maybe<StringQueryOperatorInput>;
  clients_link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicGlobalBodyClientsItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicGlobalBodyClientsItemTypeFilterInput>;
};

export type PrismicGlobalBodyClientsPrimaryType = {
  clients_year?: Maybe<Scalars['Float']>;
};

export type PrismicGlobalBodyClientsPrimaryTypeFilterInput = {
  clients_year?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicGlobalBodyClientsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicGlobalBodyClientsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicGlobalBodySlicesType = PrismicGlobalBodyClients;

export type PrismicGlobalConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicGlobalEdge>;
  nodes: Array<PrismicGlobal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicGlobalGroupConnection>;
};


export type PrismicGlobalConnectionDistinctArgs = {
  field: PrismicGlobalFieldsEnum;
};


export type PrismicGlobalConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicGlobalFieldsEnum;
};

export type PrismicGlobalDataType = {
  email_address?: Maybe<Scalars['String']>;
  social_media_links?: Maybe<Array<Maybe<PrismicGlobalSocialMediaLinksGroupType>>>;
  body?: Maybe<Array<Maybe<PrismicGlobalBodySlicesType>>>;
  articles?: Maybe<Array<Maybe<PrismicGlobalArticlesGroupType>>>;
};

export type PrismicGlobalDataTypeFilterInput = {
  email_address?: Maybe<StringQueryOperatorInput>;
  social_media_links?: Maybe<PrismicGlobalSocialMediaLinksGroupTypeFilterListInput>;
  articles?: Maybe<PrismicGlobalArticlesGroupTypeFilterListInput>;
};

export type PrismicGlobalEdge = {
  next?: Maybe<PrismicGlobal>;
  node: PrismicGlobal;
  previous?: Maybe<PrismicGlobal>;
};

export type PrismicGlobalFieldsEnum = 
  'data___email_address' |
  'data___social_media_links' |
  'data___social_media_links___link_icon___alt' |
  'data___social_media_links___link_icon___copyright' |
  'data___social_media_links___link_icon___url' |
  'data___social_media_links___link_icon___thumbnails' |
  'data___social_media_links___link_text' |
  'data___social_media_links___link_href' |
  'data___articles' |
  'data___articles___title' |
  'data___articles___link___link_type' |
  'data___articles___link___isBroken' |
  'data___articles___link___url' |
  'data___articles___link___target' |
  'data___articles___link___size' |
  'data___articles___link___id' |
  'data___articles___link___type' |
  'data___articles___link___tags' |
  'data___articles___link___lang' |
  'data___articles___link___slug' |
  'data___articles___link___uid' |
  'data___articles___link___raw' |
  'dataRaw' |
  'dataString' |
  'first_publication_date' |
  'href' |
  'url' |
  'lang' |
  'last_publication_date' |
  'tags' |
  'alternate_languages' |
  'alternate_languages___link_type' |
  'alternate_languages___isBroken' |
  'alternate_languages___url' |
  'alternate_languages___target' |
  'alternate_languages___size' |
  'alternate_languages___id' |
  'alternate_languages___type' |
  'alternate_languages___tags' |
  'alternate_languages___lang' |
  'alternate_languages___slug' |
  'alternate_languages___uid' |
  'alternate_languages___raw' |
  'type' |
  'prismicId' |
  'uid' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicGlobalFilterInput = {
  data?: Maybe<PrismicGlobalDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicGlobalGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicGlobalEdge>;
  nodes: Array<PrismicGlobal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicGlobalSocialMediaLinksGroupType = {
  link_icon?: Maybe<PrismicImageType>;
  link_text?: Maybe<Scalars['String']>;
  link_href?: Maybe<Scalars['String']>;
};

export type PrismicGlobalSocialMediaLinksGroupTypeFilterInput = {
  link_icon?: Maybe<PrismicImageTypeFilterInput>;
  link_text?: Maybe<StringQueryOperatorInput>;
  link_href?: Maybe<StringQueryOperatorInput>;
};

export type PrismicGlobalSocialMediaLinksGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicGlobalSocialMediaLinksGroupTypeFilterInput>;
};

export type PrismicGlobalSortInput = {
  fields?: Maybe<Array<Maybe<PrismicGlobalFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHome = PrismicDocument & Node & {
  data?: Maybe<PrismicHomeDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicHomeFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicHomeLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyContentSection = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyContentSectionPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicHomeBodyContentSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyContentSectionEdge>;
  nodes: Array<PrismicHomeBodyContentSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyContentSectionGroupConnection>;
};


export type PrismicHomeBodyContentSectionConnectionDistinctArgs = {
  field: PrismicHomeBodyContentSectionFieldsEnum;
};


export type PrismicHomeBodyContentSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyContentSectionFieldsEnum;
};

export type PrismicHomeBodyContentSectionEdge = {
  next?: Maybe<PrismicHomeBodyContentSection>;
  node: PrismicHomeBodyContentSection;
  previous?: Maybe<PrismicHomeBodyContentSection>;
};

export type PrismicHomeBodyContentSectionFieldsEnum = 
  'slice_type' |
  'slice_label' |
  'primary___icon' |
  'primary___content_section_header' |
  'primary___content_section_body___html' |
  'primary___content_section_body___text' |
  'primary___content_section_body___raw' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicHomeBodyContentSectionFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyContentSectionPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeBodyContentSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyContentSectionEdge>;
  nodes: Array<PrismicHomeBodyContentSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyContentSectionPrimaryType = {
  icon?: Maybe<Scalars['String']>;
  content_section_header?: Maybe<Scalars['String']>;
  content_section_body?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomeBodyContentSectionPrimaryTypeFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>;
  content_section_header?: Maybe<StringQueryOperatorInput>;
  content_section_body?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeBodyContentSectionSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyContentSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodySlicesType = PrismicHomeBodyContentSection;

export type PrismicHomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeGroupConnection>;
};


export type PrismicHomeConnectionDistinctArgs = {
  field: PrismicHomeFieldsEnum;
};


export type PrismicHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeDataType = {
  hero?: Maybe<PrismicStructuredTextType>;
  body?: Maybe<Array<Maybe<PrismicHomeBodySlicesType>>>;
};

export type PrismicHomeDataTypeFilterInput = {
  hero?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeEdge = {
  next?: Maybe<PrismicHome>;
  node: PrismicHome;
  previous?: Maybe<PrismicHome>;
};

export type PrismicHomeFieldsEnum = 
  'data___hero___html' |
  'data___hero___text' |
  'data___hero___raw' |
  'dataRaw' |
  'dataString' |
  'first_publication_date' |
  'href' |
  'url' |
  'lang' |
  'last_publication_date' |
  'tags' |
  'alternate_languages' |
  'alternate_languages___link_type' |
  'alternate_languages___isBroken' |
  'alternate_languages___url' |
  'alternate_languages___target' |
  'alternate_languages___size' |
  'alternate_languages___id' |
  'alternate_languages___type' |
  'alternate_languages___tags' |
  'alternate_languages___lang' |
  'alternate_languages___slug' |
  'alternate_languages___uid' |
  'alternate_languages___raw' |
  'type' |
  'prismicId' |
  'uid' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicHomeFilterInput = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

/** `gatsby-image`-compatible image data for `fixed` images. */
export type PrismicImageFixedType = {
  base64?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

/** `gatsby-image`-compatible image data for `fluid` images. */
export type PrismicImageFluidType = {
  base64?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};


export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
  /** `gatsby-image`-compatible image data for `fixed` images. */
  fixed?: Maybe<PrismicImageFixedType>;
  /** `gatsby-image`-compatible image data for `fluid` images. */
  fluid?: Maybe<PrismicImageFluidType>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Scalars['Int']>>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
  /** `gatsby-image`-compatible image data for `fixed` images. */
  fixed?: Maybe<PrismicImageFixedType>;
  /** `gatsby-image`-compatible image data for `fluid` images. */
  fluid?: Maybe<PrismicImageFluidType>;
  /** The image's thumbnails. */
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Scalars['Int']>>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

/** Types of links. */
export type PrismicLinkTypes = 
  /** Any of the other types */
  'Any' |
  /** Internal content */
  'Document' |
  /** Internal media content */
  'Media' |
  /** URL */
  'Web';

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

export type PrismicPage = PrismicDocument & Node & {
  data?: Maybe<PrismicPageDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyContentSection = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyContentSectionPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyContentSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyContentSectionEdge>;
  nodes: Array<PrismicPageBodyContentSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyContentSectionGroupConnection>;
};


export type PrismicPageBodyContentSectionConnectionDistinctArgs = {
  field: PrismicPageBodyContentSectionFieldsEnum;
};


export type PrismicPageBodyContentSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyContentSectionFieldsEnum;
};

export type PrismicPageBodyContentSectionEdge = {
  next?: Maybe<PrismicPageBodyContentSection>;
  node: PrismicPageBodyContentSection;
  previous?: Maybe<PrismicPageBodyContentSection>;
};

export type PrismicPageBodyContentSectionFieldsEnum = 
  'slice_type' |
  'slice_label' |
  'primary___icon' |
  'primary___content_section_header' |
  'primary___content_section_body___html' |
  'primary___content_section_body___text' |
  'primary___content_section_body___raw' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicPageBodyContentSectionFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyContentSectionPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyContentSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyContentSectionEdge>;
  nodes: Array<PrismicPageBodyContentSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyContentSectionPrimaryType = {
  icon?: Maybe<Scalars['String']>;
  content_section_header?: Maybe<Scalars['String']>;
  content_section_body?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyContentSectionPrimaryTypeFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>;
  content_section_header?: Maybe<StringQueryOperatorInput>;
  content_section_body?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyContentSectionSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyContentSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodySlicesType = PrismicPageBodyContentSection;

export type PrismicPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageGroupConnection>;
};


export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};


export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageFieldsEnum;
};

export type PrismicPageDataType = {
  hero?: Maybe<PrismicStructuredTextType>;
  body?: Maybe<Array<Maybe<PrismicPageBodySlicesType>>>;
  page_title?: Maybe<Scalars['String']>;
};

export type PrismicPageDataTypeFilterInput = {
  hero?: Maybe<PrismicStructuredTextTypeFilterInput>;
  page_title?: Maybe<StringQueryOperatorInput>;
};

export type PrismicPageEdge = {
  next?: Maybe<PrismicPage>;
  node: PrismicPage;
  previous?: Maybe<PrismicPage>;
};

export type PrismicPageFieldsEnum = 
  'data___hero___html' |
  'data___hero___text' |
  'data___hero___raw' |
  'data___page_title' |
  'dataRaw' |
  'dataString' |
  'first_publication_date' |
  'href' |
  'url' |
  'lang' |
  'last_publication_date' |
  'tags' |
  'alternate_languages' |
  'alternate_languages___link_type' |
  'alternate_languages___isBroken' |
  'alternate_languages___url' |
  'alternate_languages___target' |
  'alternate_languages___size' |
  'alternate_languages___id' |
  'alternate_languages___type' |
  'alternate_languages___tags' |
  'alternate_languages___lang' |
  'alternate_languages___slug' |
  'alternate_languages___uid' |
  'alternate_languages___raw' |
  'type' |
  'prismicId' |
  'uid' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type PrismicPageFilterInput = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  prismicPageBodyContentSection?: Maybe<PrismicPageBodyContentSection>;
  allPrismicPageBodyContentSection: PrismicPageBodyContentSectionConnection;
  prismicPage?: Maybe<PrismicPage>;
  allPrismicPage: PrismicPageConnection;
  prismicHomeBodyContentSection?: Maybe<PrismicHomeBodyContentSection>;
  allPrismicHomeBodyContentSection: PrismicHomeBodyContentSectionConnection;
  prismicHome?: Maybe<PrismicHome>;
  allPrismicHome: PrismicHomeConnection;
  prismicGlobalBodyClients?: Maybe<PrismicGlobalBodyClients>;
  allPrismicGlobalBodyClients: PrismicGlobalBodyClientsConnection;
  prismicGlobal?: Maybe<PrismicGlobal>;
  allPrismicGlobal: PrismicGlobalConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyContentSectionArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyContentSectionPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyContentSectionArgs = {
  filter?: Maybe<PrismicPageBodyContentSectionFilterInput>;
  sort?: Maybe<PrismicPageBodyContentSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageArgs = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>;
  sort?: Maybe<PrismicPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeBodyContentSectionArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyContentSectionPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicHomeBodyContentSectionArgs = {
  filter?: Maybe<PrismicHomeBodyContentSectionFilterInput>;
  sort?: Maybe<PrismicHomeBodyContentSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicHomeArgs = {
  data?: Maybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicHomeArgs = {
  filter?: Maybe<PrismicHomeFilterInput>;
  sort?: Maybe<PrismicHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicGlobalBodyClientsArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicGlobalBodyClientsPrimaryTypeFilterInput>;
  items?: Maybe<PrismicGlobalBodyClientsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicGlobalBodyClientsArgs = {
  filter?: Maybe<PrismicGlobalBodyClientsFilterInput>;
  sort?: Maybe<PrismicGlobalBodyClientsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicGlobalArgs = {
  data?: Maybe<PrismicGlobalDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicGlobalArgs = {
  filter?: Maybe<PrismicGlobalFilterInput>;
  sort?: Maybe<PrismicGlobalSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___siteUrl' |
  'siteMetadata___pathPrefix' |
  'siteMetadata___title' |
  'siteMetadata___titleAlt' |
  'siteMetadata___description' |
  'siteMetadata___banner' |
  'siteMetadata___headline' |
  'siteMetadata___image' |
  'siteMetadata___siteLanguage' |
  'siteMetadata___ogLanguage' |
  'siteMetadata___author' |
  'siteMetadata___twitter' |
  'port' |
  'host' |
  'pathPrefix' |
  'polyfill' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  uid?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___uid' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___codegenDelay' |
  'pluginCreator___pluginOptions___repositoryName' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___src' |
  'pluginCreator___pluginOptions___displayName' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___fileName' |
  'pluginOptions___codegenDelay' |
  'pluginOptions___repositoryName' |
  'pluginOptions___accessToken' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___src' |
  'pluginOptions___displayName' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  codegenDelay?: Maybe<Scalars['Int']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemas = {
  page?: Maybe<SitePluginPluginOptionsSchemasPage>;
  home?: Maybe<SitePluginPluginOptionsSchemasHome>;
  global?: Maybe<SitePluginPluginOptionsSchemasGlobal>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>;
  home?: Maybe<SitePluginPluginOptionsSchemasHomeFilterInput>;
  global?: Maybe<SitePluginPluginOptionsSchemasGlobalFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobal = {
  Main?: Maybe<SitePluginPluginOptionsSchemasGlobalMain>;
  Clients?: Maybe<SitePluginPluginOptionsSchemasGlobalClients>;
  Articles?: Maybe<SitePluginPluginOptionsSchemasGlobalArticles>;
};

export type SitePluginPluginOptionsSchemasGlobalArticles = {
  articles?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticles>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticles = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFields = {
  title?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitle>;
  link?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLink>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLink = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesArticlesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalArticlesFilterInput = {
  articles?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesArticlesFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClients = {
  body?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBody>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoices = {
  clients?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClients>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClients = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeat>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_Repeat = {
  clients_year?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_Year>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_Year = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatFilterInput = {
  clients_year?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsNon_RepeatClients_YearFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeat = {
  clients_name?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_Name>;
  clients_link?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_Link>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_Name = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatFilterInput = {
  clients_name?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_NameFilterInput>;
  clients_link?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsRepeatClients_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesFilterInput = {
  clients?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesClientsFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalClientsFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasGlobalMainFilterInput>;
  Clients?: Maybe<SitePluginPluginOptionsSchemasGlobalClientsFilterInput>;
  Articles?: Maybe<SitePluginPluginOptionsSchemasGlobalArticlesFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMain = {
  uid?: Maybe<SitePluginPluginOptionsSchemasGlobalMainUid>;
  email_address?: Maybe<SitePluginPluginOptionsSchemasGlobalMainEmail_Address>;
  social_media_links?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_Links>;
};

export type SitePluginPluginOptionsSchemasGlobalMainEmail_Address = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainEmail_AddressConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainEmail_AddressConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainEmail_AddressConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainEmail_AddressFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainEmail_AddressConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasGlobalMainUidFilterInput>;
  email_address?: Maybe<SitePluginPluginOptionsSchemasGlobalMainEmail_AddressFilterInput>;
  social_media_links?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_Links = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFields = {
  link_icon?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Icon>;
  link_text?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Text>;
  link_href?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Href>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsFilterInput = {
  link_icon?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconFilterInput>;
  link_text?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextFilterInput>;
  link_href?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Href = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_HrefConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Icon = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_IconConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_Text = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsLink_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainSocial_Media_LinksConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasGlobalMainUidConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasGlobalMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasGlobalMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasGlobalMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHome = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMain>;
};

export type SitePluginPluginOptionsSchemasHomeFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomeMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMain = {
  uid?: Maybe<SitePluginPluginOptionsSchemasHomeMainUid>;
  hero?: Maybe<SitePluginPluginOptionsSchemasHomeMainHero>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBody>;
};

export type SitePluginPluginOptionsSchemasHomeMainBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfig = {
  labels?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigLabels>;
  choices?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoices = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_Section>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_Section = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_Repeat = {
  icon?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIcon>;
  content_section_header?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Header>;
  content_section_body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Body>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Body = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Header = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatFilterInput = {
  icon?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconFilterInput>;
  content_section_header?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderFilterInput>;
  content_section_body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIcon = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionNon_RepeatIconConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFilterInput = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesContent_SectionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigFilterInput = {
  labels?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsFilterInput>;
  choices?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigLabels = {
  content_section?: Maybe<Array<Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_Section>>>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_Section = {
  name?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_SectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_SectionFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_SectionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsFilterInput = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigLabelsContent_SectionFilterListInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasHomeMainUidFilterInput>;
  hero?: Maybe<SitePluginPluginOptionsSchemasHomeMainHeroFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomeMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHero = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHeroConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainHeroConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainHeroConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainHeroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainHeroConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasHomeMainUidConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomeMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomeMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomeMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPage = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>;
  Meta?: Maybe<SitePluginPluginOptionsSchemasPageMeta>;
};

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>;
  Meta?: Maybe<SitePluginPluginOptionsSchemasPageMetaFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMain = {
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>;
  hero?: Maybe<SitePluginPluginOptionsSchemasPageMainHero>;
  body?: Maybe<SitePluginPluginOptionsSchemasPageMainBody>;
};

export type SitePluginPluginOptionsSchemasPageMainBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfig = {
  labels?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigLabels>;
  choices?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoices = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_Section>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_Section = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_Repeat = {
  icon?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIcon>;
  content_section_header?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Header>;
  content_section_body?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Body>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Body = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_Header = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatFilterInput = {
  icon?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconFilterInput>;
  content_section_header?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_HeaderFilterInput>;
  content_section_body?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatContent_Section_BodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIcon = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionNon_RepeatIconConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesFilterInput = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesContent_SectionFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigFilterInput = {
  labels?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsFilterInput>;
  choices?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigLabels = {
  content_section?: Maybe<Array<Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_Section>>>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_Section = {
  name?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_SectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_SectionFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_SectionFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsFilterInput = {
  content_section?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigLabelsContent_SectionFilterListInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>;
  hero?: Maybe<SitePluginPluginOptionsSchemasPageMainHeroFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasPageMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainHero = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainHeroConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainHeroConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainHeroConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainHeroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainHeroConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMeta = {
  page_title?: Maybe<SitePluginPluginOptionsSchemasPageMetaPage_Title>;
};

export type SitePluginPluginOptionsSchemasPageMetaFilterInput = {
  page_title?: Maybe<SitePluginPluginOptionsSchemasPageMetaPage_TitleFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMetaPage_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMetaPage_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMetaPage_TitleConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMetaPage_TitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMetaPage_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMetaPage_TitleConfigFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  siteUrl?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleAlt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  siteLanguage?: Maybe<Scalars['String']>;
  ogLanguage?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  titleAlt?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  banner?: Maybe<StringQueryOperatorInput>;
  headline?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type MainMenuLinksQueryVariables = {};


export type MainMenuLinksQuery = { allPrismicGlobal: { edges: Array<{ node: { data?: Maybe<(
          Pick<PrismicGlobalDataType, 'email_address'>
          & { social_media_links?: Maybe<Array<Maybe<Pick<PrismicGlobalSocialMediaLinksGroupType, 'link_text' | 'link_href'>>>> }
        )> } }> } };

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'image'>> }> };

export type MainMenuIconLinksQueryVariables = {};


export type MainMenuIconLinksQuery = { allPrismicGlobal: { edges: Array<{ node: { data?: Maybe<(
          Pick<PrismicGlobalDataType, 'email_address'>
          & { social_media_links?: Maybe<Array<Maybe<(
            Pick<PrismicGlobalSocialMediaLinksGroupType, 'link_text' | 'link_href'>
            & { link_icon?: Maybe<Pick<PrismicImageType, 'url'>> }
          )>>> }
        )> } }> } };

export type HomePageQueryQueryVariables = {};


export type HomePageQueryQuery = { prismicHome?: Maybe<{ data?: Maybe<{ hero?: Maybe<Pick<PrismicStructuredTextType, 'html' | 'text' | 'raw'>>, body?: Maybe<Array<Maybe<(
        Pick<PrismicHomeBodyContentSection, 'id' | 'slice_type'>
        & { primary?: Maybe<(
          Pick<PrismicHomeBodyContentSectionPrimaryType, 'icon' | 'content_section_header'>
          & { content_section_body?: Maybe<Pick<PrismicStructuredTextType, 'raw'>> }
        )> }
      )>>> }> }>, allPrismicGlobal: { edges: Array<{ node: { data?: Maybe<{ articles?: Maybe<Array<Maybe<(
            Pick<PrismicGlobalArticlesGroupType, 'title'>
            & { link?: Maybe<Pick<PrismicLinkType, 'raw'>> }
          )>>>, body?: Maybe<Array<Maybe<{ primary?: Maybe<Pick<PrismicGlobalBodyClientsPrimaryType, 'clients_year'>>, items?: Maybe<Array<Maybe<(
              Pick<PrismicGlobalBodyClientsItemType, 'clients_name'>
              & { clients_link?: Maybe<Pick<PrismicLinkType, 'url' | 'link_type' | 'raw'>> }
            )>>> }>>> }> } }> } };

export type PageBySlugQueryVariables = {
  uid: Scalars['String'];
};


export type PageBySlugQuery = { allPrismicPage: { edges: Array<{ node: { data?: Maybe<(
          Pick<PrismicPageDataType, 'page_title'>
          & { body?: Maybe<Array<Maybe<(
            Pick<PrismicPageBodyContentSection, 'id' | 'slice_type'>
            & { primary?: Maybe<(
              Pick<PrismicPageBodyContentSectionPrimaryType, 'icon' | 'content_section_header'>
              & { content_section_body?: Maybe<Pick<PrismicStructuredTextType, 'raw'>> }
            )> }
          )>>>, hero?: Maybe<Pick<PrismicStructuredTextType, 'raw'>> }
        )> } }> } };

export type GatsbyPrismicImageFixedFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFixed_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFixed_WithWebpFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFixed_WithWebp_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFluidFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFluid_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebpFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebp_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
