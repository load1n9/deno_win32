/// Auto-generated by Deno Win32: Windows.Win32.UI.Xaml.Diagnostics.Apis

import * as util from "../../../util.ts";

// Enums
export type VisualMutationType = number;
export type BaseValueSource = number;
export type MetadataBit = number;
export type RenderTargetBitmapOptions = number;
export type DXGI_FORMAT = number;
export type DXGI_ALPHA_MODE = number;
export type ResourceType = number;
export type VisualElementState = number;

// Constants
export const E_UNKNOWNTYPE = 1226386531513204776n;
export const Add = 0;
export const Remove = 1;
export const BaseValueSourceUnknown = 0;
export const BaseValueSourceDefault = 1;
export const BaseValueSourceBuiltInStyle = 2;
export const BaseValueSourceStyle = 3;
export const BaseValueSourceLocal = 4;
export const Inherited = 5;
export const DefaultStyleTrigger = 6;
export const TemplateTrigger = 7;
export const StyleTrigger = 8;
export const ImplicitStyleReference = 9;
export const ParentTemplate = 10;
export const ParentTemplateTrigger = 11;
export const Animation = 12;
export const Coercion = 13;
export const BaseValueSourceVisualState = 14;
export const None = 0;
export const IsValueHandle = 1;
export const IsPropertyReadOnly = 2;
export const IsValueCollection = 4;
export const IsValueCollectionReadOnly = 8;
export const IsValueBindingExpression = 16;
export const IsValueNull = 32;
export const IsValueHandleAndEvaluatedValue = 64;
export const RenderTarget = 0;
export const RenderTargetAndChildren = 1;
export const DXGI_FORMAT_UNKNOWN = 0;
export const DXGI_FORMAT_R32G32B32A32_TYPELESS = 1;
export const DXGI_FORMAT_R32G32B32A32_FLOAT = 2;
export const DXGI_FORMAT_R32G32B32A32_UINT = 3;
export const DXGI_FORMAT_R32G32B32A32_SINT = 4;
export const DXGI_FORMAT_R32G32B32_TYPELESS = 5;
export const DXGI_FORMAT_R32G32B32_FLOAT = 6;
export const DXGI_FORMAT_R32G32B32_UINT = 7;
export const DXGI_FORMAT_R32G32B32_SINT = 8;
export const DXGI_FORMAT_R16G16B16A16_TYPELESS = 9;
export const DXGI_FORMAT_R16G16B16A16_FLOAT = 10;
export const DXGI_FORMAT_R16G16B16A16_UNORM = 11;
export const DXGI_FORMAT_R16G16B16A16_UINT = 12;
export const DXGI_FORMAT_R16G16B16A16_SNORM = 13;
export const DXGI_FORMAT_R16G16B16A16_SINT = 14;
export const DXGI_FORMAT_R32G32_TYPELESS = 15;
export const DXGI_FORMAT_R32G32_FLOAT = 16;
export const DXGI_FORMAT_R32G32_UINT = 17;
export const DXGI_FORMAT_R32G32_SINT = 18;
export const DXGI_FORMAT_R32G8X24_TYPELESS = 19;
export const DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20;
export const DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21;
export const DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22;
export const DXGI_FORMAT_R10G10B10A2_TYPELESS = 23;
export const DXGI_FORMAT_R10G10B10A2_UNORM = 24;
export const DXGI_FORMAT_R10G10B10A2_UINT = 25;
export const DXGI_FORMAT_R11G11B10_FLOAT = 26;
export const DXGI_FORMAT_R8G8B8A8_TYPELESS = 27;
export const DXGI_FORMAT_R8G8B8A8_UNORM = 28;
export const DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29;
export const DXGI_FORMAT_R8G8B8A8_UINT = 30;
export const DXGI_FORMAT_R8G8B8A8_SNORM = 31;
export const DXGI_FORMAT_R8G8B8A8_SINT = 32;
export const DXGI_FORMAT_R16G16_TYPELESS = 33;
export const DXGI_FORMAT_R16G16_FLOAT = 34;
export const DXGI_FORMAT_R16G16_UNORM = 35;
export const DXGI_FORMAT_R16G16_UINT = 36;
export const DXGI_FORMAT_R16G16_SNORM = 37;
export const DXGI_FORMAT_R16G16_SINT = 38;
export const DXGI_FORMAT_R32_TYPELESS = 39;
export const DXGI_FORMAT_D32_FLOAT = 40;
export const DXGI_FORMAT_R32_FLOAT = 41;
export const DXGI_FORMAT_R32_UINT = 42;
export const DXGI_FORMAT_R32_SINT = 43;
export const DXGI_FORMAT_R24G8_TYPELESS = 44;
export const DXGI_FORMAT_D24_UNORM_S8_UINT = 45;
export const DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46;
export const DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47;
export const DXGI_FORMAT_R8G8_TYPELESS = 48;
export const DXGI_FORMAT_R8G8_UNORM = 49;
export const DXGI_FORMAT_R8G8_UINT = 50;
export const DXGI_FORMAT_R8G8_SNORM = 51;
export const DXGI_FORMAT_R8G8_SINT = 52;
export const DXGI_FORMAT_R16_TYPELESS = 53;
export const DXGI_FORMAT_R16_FLOAT = 54;
export const DXGI_FORMAT_D16_UNORM = 55;
export const DXGI_FORMAT_R16_UNORM = 56;
export const DXGI_FORMAT_R16_UINT = 57;
export const DXGI_FORMAT_R16_SNORM = 58;
export const DXGI_FORMAT_R16_SINT = 59;
export const DXGI_FORMAT_R8_TYPELESS = 60;
export const DXGI_FORMAT_R8_UNORM = 61;
export const DXGI_FORMAT_R8_UINT = 62;
export const DXGI_FORMAT_R8_SNORM = 63;
export const DXGI_FORMAT_R8_SINT = 64;
export const DXGI_FORMAT_A8_UNORM = 65;
export const DXGI_FORMAT_R1_UNORM = 66;
export const DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67;
export const DXGI_FORMAT_R8G8_B8G8_UNORM = 68;
export const DXGI_FORMAT_G8R8_G8B8_UNORM = 69;
export const DXGI_FORMAT_BC1_TYPELESS = 70;
export const DXGI_FORMAT_BC1_UNORM = 71;
export const DXGI_FORMAT_BC1_UNORM_SRGB = 72;
export const DXGI_FORMAT_BC2_TYPELESS = 73;
export const DXGI_FORMAT_BC2_UNORM = 74;
export const DXGI_FORMAT_BC2_UNORM_SRGB = 75;
export const DXGI_FORMAT_BC3_TYPELESS = 76;
export const DXGI_FORMAT_BC3_UNORM = 77;
export const DXGI_FORMAT_BC3_UNORM_SRGB = 78;
export const DXGI_FORMAT_BC4_TYPELESS = 79;
export const DXGI_FORMAT_BC4_UNORM = 80;
export const DXGI_FORMAT_BC4_SNORM = 81;
export const DXGI_FORMAT_BC5_TYPELESS = 82;
export const DXGI_FORMAT_BC5_UNORM = 83;
export const DXGI_FORMAT_BC5_SNORM = 84;
export const DXGI_FORMAT_B5G6R5_UNORM = 85;
export const DXGI_FORMAT_B5G5R5A1_UNORM = 86;
export const DXGI_FORMAT_B8G8R8A8_UNORM = 87;
export const DXGI_FORMAT_B8G8R8X8_UNORM = 88;
export const DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89;
export const DXGI_FORMAT_B8G8R8A8_TYPELESS = 90;
export const DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91;
export const DXGI_FORMAT_B8G8R8X8_TYPELESS = 92;
export const DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93;
export const DXGI_FORMAT_BC6H_TYPELESS = 94;
export const DXGI_FORMAT_BC6H_UF16 = 95;
export const DXGI_FORMAT_BC6H_SF16 = 96;
export const DXGI_FORMAT_BC7_TYPELESS = 97;
export const DXGI_FORMAT_BC7_UNORM = 98;
export const DXGI_FORMAT_BC7_UNORM_SRGB = 99;
export const DXGI_FORMAT_AYUV = 100;
export const DXGI_FORMAT_Y410 = 101;
export const DXGI_FORMAT_Y416 = 102;
export const DXGI_FORMAT_NV12 = 103;
export const DXGI_FORMAT_P010 = 104;
export const DXGI_FORMAT_P016 = 105;
export const DXGI_FORMAT_420_OPAQUE = 106;
export const DXGI_FORMAT_YUY2 = 107;
export const DXGI_FORMAT_Y210 = 108;
export const DXGI_FORMAT_Y216 = 109;
export const DXGI_FORMAT_NV11 = 110;
export const DXGI_FORMAT_AI44 = 111;
export const DXGI_FORMAT_IA44 = 112;
export const DXGI_FORMAT_P8 = 113;
export const DXGI_FORMAT_A8P8 = 114;
export const DXGI_FORMAT_B4G4R4A4_UNORM = 115;
export const DXGI_FORMAT_P208 = 130;
export const DXGI_FORMAT_V208 = 131;
export const DXGI_FORMAT_V408 = 132;
export const DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 189;
export const DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 190;
export const DXGI_FORMAT_FORCE_UINT = 4294967295;
export const DXGI_ALPHA_MODE_UNSPECIFIED = 0;
export const DXGI_ALPHA_MODE_PREMULTIPLIED = 1;
export const DXGI_ALPHA_MODE_STRAIGHT = 2;
export const DXGI_ALPHA_MODE_IGNORE = 3;
export const DXGI_ALPHA_MODE_FORCE_DWORD = 4294967295;
export const ResourceTypeStatic = 0;
export const ResourceTypeTheme = 1;
export const ErrorResolved = 0;
export const ErrorResourceNotFound = 1;
export const ErrorInvalidResource = 2;

// Structs

export type BSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.UI.Xaml.Diagnostics.SourceInfo (size: 32)
 */
export interface SourceInfo {
  /** Windows.Win32.Foundation.BSTR */
  FileName: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  LineNumber: number;
  /** u32 */
  ColumnNumber: number;
  /** u32 */
  CharPosition: number;
  /** Windows.Win32.Foundation.BSTR */
  Hash: Uint8Array | Deno.PointerValue | null;
}

export const sizeofSourceInfo = 32;

export function allocSourceInfo(data?: Partial<SourceInfo>): Uint8Array {
  const buf = new Uint8Array(sizeofSourceInfo);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.FileName !== undefined) view.setBigUint64(0, data.FileName === null ? 0n : util.toBigInt(util.toPointer(data.FileName)), true);
  // 0x08: u32
  if (data?.LineNumber !== undefined) view.setUint32(8, Number(data.LineNumber), true);
  // 0x0c: u32
  if (data?.ColumnNumber !== undefined) view.setUint32(12, Number(data.ColumnNumber), true);
  // 0x10: u32
  if (data?.CharPosition !== undefined) view.setUint32(16, Number(data.CharPosition), true);
  // 0x14: pad4
  // 0x18: pointer
  if (data?.Hash !== undefined) view.setBigUint64(24, data.Hash === null ? 0n : util.toBigInt(util.toPointer(data.Hash)), true);
  return buf;
}

export class SourceInfoView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get FileName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get LineNumber(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get ColumnNumber(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: u32
  get CharPosition(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  get Hash(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set FileName(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set LineNumber(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set ColumnNumber(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: u32
  set CharPosition(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4

  // 0x18: pointer
  set Hash(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.ParentChildRelation (size: 24)
 */
export interface ParentChildRelation {
  /** u64 */
  Parent: number | bigint;
  /** u64 */
  Child: number | bigint;
  /** u32 */
  ChildIndex: number;
}

export const sizeofParentChildRelation = 24;

export function allocParentChildRelation(data?: Partial<ParentChildRelation>): Uint8Array {
  const buf = new Uint8Array(sizeofParentChildRelation);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Parent !== undefined) view.setBigUint64(0, util.toBigInt(data.Parent), true);
  // 0x08: u64
  if (data?.Child !== undefined) view.setBigUint64(8, util.toBigInt(data.Child), true);
  // 0x10: u32
  if (data?.ChildIndex !== undefined) view.setUint32(16, Number(data.ChildIndex), true);
  // 0x14: pad4
  return buf;
}

export class ParentChildRelationView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get Parent(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: u64
  get Child(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x10: u32
  get ChildIndex(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: pad4

  // 0x00: u64
  set Parent(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: u64
  set Child(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }

  // 0x10: u32
  set ChildIndex(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: pad4
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.VisualElement (size: 40)
 */
export interface VisualElement {
  /** u64 */
  Handle: number | bigint;
  /** Windows.Win32.UI.Xaml.Diagnostics.SourceInfo */
  SrcInfo: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  Type: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  Name: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  NumChildren: number;
}

export const sizeofVisualElement = 40;

export function allocVisualElement(data?: Partial<VisualElement>): Uint8Array {
  const buf = new Uint8Array(sizeofVisualElement);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Handle !== undefined) view.setBigUint64(0, util.toBigInt(data.Handle), true);
  // 0x08: pointer
  if (data?.SrcInfo !== undefined) view.setBigUint64(8, data.SrcInfo === null ? 0n : util.toBigInt(util.toPointer(data.SrcInfo)), true);
  // 0x10: pointer
  if (data?.Type !== undefined) view.setBigUint64(16, data.Type === null ? 0n : util.toBigInt(util.toPointer(data.Type)), true);
  // 0x18: pointer
  if (data?.Name !== undefined) view.setBigUint64(24, data.Name === null ? 0n : util.toBigInt(util.toPointer(data.Name)), true);
  // 0x20: u32
  if (data?.NumChildren !== undefined) view.setUint32(32, Number(data.NumChildren), true);
  // 0x24: pad4
  return buf;
}

export class VisualElementView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get Handle(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: pointer
  get SrcInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get Type(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get Name(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: u32
  get NumChildren(): number {
    return this.view.getUint32(32, true);
  }

  // 0x24: pad4

  // 0x00: u64
  set Handle(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: pointer
  set SrcInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set Type(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set Name(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x20: u32
  set NumChildren(value: number) {
    this.view.setUint32(32, value, true);
  }

  // 0x24: pad4
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.PropertyChainSource (size: 40)
 */
export interface PropertyChainSource {
  /** u64 */
  Handle: number | bigint;
  /** Windows.Win32.Foundation.BSTR */
  TargetType: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  Name: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.UI.Xaml.Diagnostics.BaseValueSource */
  Source: BaseValueSource;
  /** Windows.Win32.UI.Xaml.Diagnostics.SourceInfo */
  SrcInfo: Uint8Array | Deno.PointerValue | null;
}

export const sizeofPropertyChainSource = 40;

export function allocPropertyChainSource(data?: Partial<PropertyChainSource>): Uint8Array {
  const buf = new Uint8Array(sizeofPropertyChainSource);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.Handle !== undefined) view.setBigUint64(0, util.toBigInt(data.Handle), true);
  // 0x08: pointer
  if (data?.TargetType !== undefined) view.setBigUint64(8, data.TargetType === null ? 0n : util.toBigInt(util.toPointer(data.TargetType)), true);
  // 0x10: pointer
  if (data?.Name !== undefined) view.setBigUint64(16, data.Name === null ? 0n : util.toBigInt(util.toPointer(data.Name)), true);
  // 0x18: i32
  if (data?.Source !== undefined) view.setInt32(24, Number(data.Source), true);
  // 0x1c: pad4
  // 0x20: pointer
  if (data?.SrcInfo !== undefined) view.setBigUint64(32, data.SrcInfo === null ? 0n : util.toBigInt(util.toPointer(data.SrcInfo)), true);
  return buf;
}

export class PropertyChainSourceView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u64
  get Handle(): number | bigint {
    return this.view.getBigUint64(0, true);
  }

  // 0x08: pointer
  get TargetType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get Name(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: i32
  get Source(): number {
    return this.view.getInt32(24, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  get SrcInfo(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u64
  set Handle(value: number | bigint) {
    this.view.setBigUint64(0, util.toBigInt(value), true);
  }

  // 0x08: pointer
  set TargetType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set Name(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: i32
  set Source(value: number) {
    this.view.setInt32(24, value, true);
  }

  // 0x1c: pad4

  // 0x20: pointer
  set SrcInfo(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }
}

export type BOOL = number;

/**
 * Windows.Win32.UI.Xaml.Diagnostics.PropertyChainValue (size: 80)
 */
export interface PropertyChainValue {
  /** u32 */
  Index: number;
  /** Windows.Win32.Foundation.BSTR */
  Type: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  DeclaringType: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  ValueType: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  ItemType: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  Value: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BOOL */
  Overridden: boolean;
  /** i64 */
  MetadataBits: number | bigint;
  /** Windows.Win32.Foundation.BSTR */
  PropertyName: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  PropertyChainIndex: number;
}

export const sizeofPropertyChainValue = 80;

export function allocPropertyChainValue(data?: Partial<PropertyChainValue>): Uint8Array {
  const buf = new Uint8Array(sizeofPropertyChainValue);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Index !== undefined) view.setUint32(0, Number(data.Index), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.Type !== undefined) view.setBigUint64(8, data.Type === null ? 0n : util.toBigInt(util.toPointer(data.Type)), true);
  // 0x10: pointer
  if (data?.DeclaringType !== undefined) view.setBigUint64(16, data.DeclaringType === null ? 0n : util.toBigInt(util.toPointer(data.DeclaringType)), true);
  // 0x18: pointer
  if (data?.ValueType !== undefined) view.setBigUint64(24, data.ValueType === null ? 0n : util.toBigInt(util.toPointer(data.ValueType)), true);
  // 0x20: pointer
  if (data?.ItemType !== undefined) view.setBigUint64(32, data.ItemType === null ? 0n : util.toBigInt(util.toPointer(data.ItemType)), true);
  // 0x28: pointer
  if (data?.Value !== undefined) view.setBigUint64(40, data.Value === null ? 0n : util.toBigInt(util.toPointer(data.Value)), true);
  // 0x30: i32
  if (data?.Overridden !== undefined) view.setInt32(48, Number(data.Overridden), true);
  // 0x34: pad4
  // 0x38: i64
  if (data?.MetadataBits !== undefined) view.setBigInt64(56, util.toBigInt(data.MetadataBits), true);
  // 0x40: pointer
  if (data?.PropertyName !== undefined) view.setBigUint64(64, data.PropertyName === null ? 0n : util.toBigInt(util.toPointer(data.PropertyName)), true);
  // 0x48: u32
  if (data?.PropertyChainIndex !== undefined) view.setUint32(72, Number(data.PropertyChainIndex), true);
  // 0x4c: pad4
  return buf;
}

export class PropertyChainValueView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Index(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get Type(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get DeclaringType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: pointer
  get ValueType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x20: pointer
  get ItemType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(32, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x28: pointer
  get Value(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(40, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x30: i32
  get Overridden(): number {
    return this.view.getInt32(48, true);
  }

  // 0x34: pad4

  // 0x38: i64
  get MetadataBits(): number | bigint {
    return this.view.getBigInt64(56, true);
  }

  // 0x40: pointer
  get PropertyName(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(64, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x48: u32
  get PropertyChainIndex(): number {
    return this.view.getUint32(72, true);
  }

  // 0x4c: pad4

  // 0x00: u32
  set Index(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set Type(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set DeclaringType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: pointer
  set ValueType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x20: pointer
  set ItemType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(32, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x28: pointer
  set Value(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(40, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x30: i32
  set Overridden(value: number) {
    this.view.setInt32(48, value, true);
  }

  // 0x34: pad4

  // 0x38: i64
  set MetadataBits(value: number | bigint) {
    this.view.setBigInt64(56, util.toBigInt(value), true);
  }

  // 0x40: pointer
  set PropertyName(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(64, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x48: u32
  set PropertyChainIndex(value: number) {
    this.view.setUint32(72, value, true);
  }

  // 0x4c: pad4
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.EnumType (size: 24)
 */
export interface EnumType {
  /** Windows.Win32.Foundation.BSTR */
  Name: Uint8Array | Deno.PointerValue | null;
  /** ptr */
  ValueInts: Deno.PointerValue | Uint8Array | null;
  /** ptr */
  ValueStrings: Deno.PointerValue | Uint8Array | null;
}

export const sizeofEnumType = 24;

export function allocEnumType(data?: Partial<EnumType>): Uint8Array {
  const buf = new Uint8Array(sizeofEnumType);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.Name !== undefined) view.setBigUint64(0, data.Name === null ? 0n : util.toBigInt(util.toPointer(data.Name)), true);
  // 0x08: pointer
  if (data?.ValueInts !== undefined) view.setBigUint64(8, data.ValueInts === null ? 0n : util.toBigInt(util.toPointer(data.ValueInts)), true);
  // 0x10: pointer
  if (data?.ValueStrings !== undefined) view.setBigUint64(16, data.ValueStrings === null ? 0n : util.toBigInt(util.toPointer(data.ValueStrings)), true);
  return buf;
}

export class EnumTypeView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get Name(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get ValueInts(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get ValueStrings(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set Name(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: pointer
  set ValueInts(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set ValueStrings(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.CollectionElementValue (size: 32)
 */
export interface CollectionElementValue {
  /** u32 */
  Index: number;
  /** Windows.Win32.Foundation.BSTR */
  ValueType: Uint8Array | Deno.PointerValue | null;
  /** Windows.Win32.Foundation.BSTR */
  Value: Uint8Array | Deno.PointerValue | null;
  /** i64 */
  MetadataBits: number | bigint;
}

export const sizeofCollectionElementValue = 32;

export function allocCollectionElementValue(data?: Partial<CollectionElementValue>): Uint8Array {
  const buf = new Uint8Array(sizeofCollectionElementValue);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Index !== undefined) view.setUint32(0, Number(data.Index), true);
  // 0x04: pad4
  // 0x08: pointer
  if (data?.ValueType !== undefined) view.setBigUint64(8, data.ValueType === null ? 0n : util.toBigInt(util.toPointer(data.ValueType)), true);
  // 0x10: pointer
  if (data?.Value !== undefined) view.setBigUint64(16, data.Value === null ? 0n : util.toBigInt(util.toPointer(data.Value)), true);
  // 0x18: i64
  if (data?.MetadataBits !== undefined) view.setBigInt64(24, util.toBigInt(data.MetadataBits), true);
  return buf;
}

export class CollectionElementValueView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Index(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  get ValueType(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: pointer
  get Value(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x18: i64
  get MetadataBits(): number | bigint {
    return this.view.getBigInt64(24, true);
  }

  // 0x00: u32
  set Index(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: pad4

  // 0x08: pointer
  set ValueType(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: pointer
  set Value(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x18: i64
  set MetadataBits(value: number | bigint) {
    this.view.setBigInt64(24, util.toBigInt(value), true);
  }
}

/**
 * Windows.Win32.UI.Xaml.Diagnostics.BitmapDescription (size: 16)
 */
export interface BitmapDescription {
  /** u32 */
  Width: number;
  /** u32 */
  Height: number;
  /** Windows.Win32.Graphics.Dxgi.Common.DXGI_FORMAT */
  Format: DXGI_FORMAT;
  /** Windows.Win32.Graphics.Dxgi.Common.DXGI_ALPHA_MODE */
  AlphaMode: DXGI_ALPHA_MODE;
}

export const sizeofBitmapDescription = 16;

export function allocBitmapDescription(data?: Partial<BitmapDescription>): Uint8Array {
  const buf = new Uint8Array(sizeofBitmapDescription);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.Width !== undefined) view.setUint32(0, Number(data.Width), true);
  // 0x04: u32
  if (data?.Height !== undefined) view.setUint32(4, Number(data.Height), true);
  // 0x08: u32
  if (data?.Format !== undefined) view.setUint32(8, Number(data.Format), true);
  // 0x0c: u32
  if (data?.AlphaMode !== undefined) view.setUint32(12, Number(data.AlphaMode), true);
  return buf;
}

export class BitmapDescriptionView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get Width(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get Height(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get Format(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get AlphaMode(): number {
    return this.view.getUint32(12, true);
  }

  // 0x00: u32
  set Width(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set Height(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set Format(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set AlphaMode(value: number) {
    this.view.setUint32(12, value, true);
  }
}

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type HRESULT = number;

// Native Libraries

try {
  var libWindows_UI_Xaml_dll = Deno.dlopen("Windows.UI.Xaml.dll", {
    InitializeXamlDiagnostic: {
      parameters: ["buffer", "u32", "buffer", "buffer", "pointer"],
      result: "pointer",
    },
    InitializeXamlDiagnosticsEx: {
      parameters: ["buffer", "u32", "buffer", "buffer", "pointer", "buffer"],
      result: "pointer",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function InitializeXamlDiagnostic(
  endPointName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pid: number /* u32 */,
  wszDllXamlDiagnostics: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  wszTAPDllName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  tapClsid: Uint8Array | Deno.PointerValue | null /* System.Guid */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWindows_UI_Xaml_dll.InitializeXamlDiagnostic(util.pwstrToFfi(endPointName), pid, util.pwstrToFfi(wszDllXamlDiagnostics), util.pwstrToFfi(wszTAPDllName), util.toPointer(tapClsid)));
}

export function InitializeXamlDiagnosticsEx(
  endPointName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pid: number /* u32 */,
  wszDllXamlDiagnostics: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  wszTAPDllName: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  tapClsid: Uint8Array | Deno.PointerValue | null /* System.Guid */,
  wszInitializationData: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libWindows_UI_Xaml_dll.InitializeXamlDiagnosticsEx(util.pwstrToFfi(endPointName), pid, util.pwstrToFfi(wszDllXamlDiagnostics), util.pwstrToFfi(wszTAPDllName), util.toPointer(tapClsid), util.pwstrToFfi(wszInitializationData)));
}

