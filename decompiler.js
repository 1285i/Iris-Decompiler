


"use strict";

(function() {


const iris_1825i_1 = typeof TextDecoder !== 'undefined'
function iris_1825i_2 (iris_1825i_3) {
	let iris_1825i_4 = '', iris_1825i_5 = 0, iris_1825i_6 = iris_1825i_3.length, iris_1825i_7, iris_1825i_8, iris_1825i_9, iris_1825i_10;
    while (iris_1825i_5 < iris_1825i_6) {
    iris_1825i_7 = iris_1825i_3[iris_1825i_5++]
    if (iris_1825i_7 < 0x80) { iris_1825i_4 += String.fromCharCode(iris_1825i_7); continue }
    if (iris_1825i_7 < 0xe0) { iris_1825i_8 = iris_1825i_3[iris_1825i_5++] & 0x3f; iris_1825i_4 += String.fromCharCode(((iris_1825i_7 & 0x1f) << 6) | iris_1825i_8); continue }
      if (iris_1825i_7 < 0xf0) { iris_1825i_8 = iris_1825i_3[iris_1825i_5++] & 0x3f; iris_1825i_9 = iris_1825i_3[iris_1825i_5++] & 0x3f; iris_1825i_4 += String.fromCharCode(((iris_1825i_7 & 0x0f) << 12) | (iris_1825i_8 << 6) | iris_1825i_9); continue }
      iris_1825i_8 = iris_1825i_3[iris_1825i_5++] & 0x3f; iris_1825i_9 = iris_1825i_3[iris_1825i_5++] & 0x3f; iris_1825i_10 = iris_1825i_3[iris_1825i_5++] & 0x3f
    iris_1825i_4 += String.fromCharCode(((iris_1825i_7 & 0x07) << 18) | (iris_1825i_8 << 12) | (iris_1825i_9 << 6) | iris_1825i_10);
	}
    return iris_1825i_4;
}
const iris_1825i_11 = (iris_1825i_12) => iris_1825i_1
  ? new TextDecoder().decode(iris_1825i_12)
	: iris_1825i_2(iris_1825i_12)


const iris_1825i_13 = Object.freeze({
  NOP:0, BREAK:1, LOADNIL:2, LOADB:3, LOADN:4, LOADK:5, MOVE:6, GETGLOBAL:7, SETGLOBAL:8,
	GETUPVAL:9, SETUPVAL:10, CLOSEUPVALS:11, GETIMPORT:12, GETTABLE:13, SETTABLE:14, GETTABLEKS:15,
  SETTABLEKS:16, GETTABLEN:17, SETTABLEN:18, NEWCLOSURE:19, NAMECALL:20, CALL:21, RETURN:22, JUMP:23,
   JUMPBACK:24, JUMPIF:25, JUMPIFNOT:26, JUMPIFEQ:27, JUMPIFLE:28, JUMPIFLT:29, JUMPIFNOTEQ:30,
  JUMPIFNOTLE:31, JUMPIFNOTLT:32, ADD:33, SUB:34, MUL:35, DIV:36, MOD:37, POW:38, ADDK:39, SUBK:40,
  MULK:41, DIVK:42, MODK:43, POWK:44, AND:45, OR:46, ANDK:47, ORK:48, CONCAT:49, NOT:50, MINUS:51,
	LENGTH:52, NEWTABLE:53, DUPTABLE:54, SETLIST:55, FORNPREP:56, FORNLOOP:57, FORGLOOP:58,
	FORGPREP_INEXT:59, FASTCALL3:60, FORGPREP_NEXT:61, NATIVECALL:62, GETVARARGS:63, DUPCLOSURE:64,
   PREPVARARGS:65, LOADKX:66, JUMPX:67, FASTCALL:68, COVERAGE:69, CAPTURE:70, SUBRK:71, DIVRK:72,
   FASTCALL1:73, FASTCALL2:74, FASTCALL2K:75, FORGPREP:76, JUMPXEQKNIL:77, JUMPXEQKB:78, JUMPXEQKN:79,
	JUMPXEQKS:80, IDIV:81, IDIVK:82, GETUDATAKS:83, SETUDATAKS:84, NAMECALLUDATA:85, NEWCLASSMEMBER:86,
  CALLFB:87, CMPPROTO:88, FASTPCALL:89, NEWCLASS:90,
});

const iris_1825i_14 = Object.freeze({
	Nil:0, Boolean:1, Number:2, String:3, Import:4, Table:5, Closure:6, Vector:7,
  TableWithConstants:8, Sentinel:9, Integer:10, ClassShape:11, VectorD:12,
});

const iris_1825i_15 = [
    'NOP','BREAK','LOADNIL',"LOADB","LOADN",'LOADK','MOVE',"GETGLOBAL","SETGLOBAL",
  'GETUPVAL','SETUPVAL','CLOSEUPVALS',"GETIMPORT","GETTABLE","SETTABLE","GETTABLEKS",
    "SETTABLEKS",'GETTABLEN',"SETTABLEN",'NEWCLOSURE','NAMECALL','CALL',"RETURN","JUMP",
    'JUMPBACK',"JUMPIF","JUMPIFNOT","JUMPIFEQ",'JUMPIFLE','JUMPIFLT','JUMPIFNOTEQ',
	"JUMPIFNOTLE",'JUMPIFNOTLT','ADD','SUB','MUL','DIV','MOD','POW','ADDK',"SUBK",
	"MULK",'DIVK',"MODK","POWK",'AND','OR','ANDK','ORK',"CONCAT",'NOT',"MINUS",
	'LENGTH','NEWTABLE','DUPTABLE','SETLIST','FORNPREP','FORNLOOP',"FORGLOOP",
   "FORGPREP_INEXT",'FASTCALL3',"FORGPREP_NEXT",'NATIVECALL',"GETVARARGS",'DUPCLOSURE',
	'PREPVARARGS','LOADKX','JUMPX',"FASTCALL","COVERAGE",'CAPTURE','SUBRK',"DIVRK",
   "FASTCALL1",'FASTCALL2',"FASTCALL2K","FORGPREP","JUMPXEQKNIL","JUMPXEQKB","JUMPXEQKN",
   "JUMPXEQKS",'IDIV','IDIVK',"GETUDATAKS","SETUDATAKS","NAMECALLUDATA","NEWCLASSMEMBER",
  "CALLFB","CMPPROTO","FASTPCALL","NEWCLASS",
]

function iris_1825i_16(iris_1825i_5) { return (iris_1825i_5>>8)&0xff }
function iris_1825i_17(iris_1825i_5) { return (iris_1825i_5>>16)&0xff }
function iris_1825i_18 (iris_1825i_5) { return (iris_1825i_5>>24)&0xff }
function iris_1825i_19 (iris_1825i_5) { return (iris_1825i_5|0)>>16 }
function iris_1825i_20 (iris_1825i_5) { return (iris_1825i_5|0)>>8 }
function iris_1825i_21 (iris_1825i_5) { return iris_1825i_5&0xff }
function iris_1825i_22 (iris_1825i_23) { return iris_1825i_23&0xff }
function iris_1825i_24(iris_1825i_23) { return (iris_1825i_23>>8)&0xff }
// aux layouts: 24-bit const, 1-bit const, top-bit not-flag
function iris_1825i_25 (iris_1825i_23) { return iris_1825i_23&0xffffff }
function iris_1825i_26 (iris_1825i_23) { return iris_1825i_23&0x1 }
function iris_1825i_27(iris_1825i_23) { return (iris_1825i_23>>>31)!==0 }
function iris_1825i_28 (iris_1825i_5) { return iris_1825i_5>=0&&iris_1825i_5<iris_1825i_15.length?iris_1825i_15[iris_1825i_5]:"???" }
function iris_1825i_29(iris_1825i_30) {
   switch (iris_1825i_30) {
        case iris_1825i_13.GETGLOBAL: case iris_1825i_13.SETGLOBAL: case iris_1825i_13.GETIMPORT: case iris_1825i_13.GETTABLEKS:
    case iris_1825i_13.SETTABLEKS: case iris_1825i_13.NAMECALL: case iris_1825i_13.JUMPIFEQ: case iris_1825i_13.JUMPIFLE:
        case iris_1825i_13.JUMPIFLT: case iris_1825i_13.JUMPIFNOTEQ: case iris_1825i_13.JUMPIFNOTLE: case iris_1825i_13.JUMPIFNOTLT:
        case iris_1825i_13.NEWTABLE: case iris_1825i_13.SETLIST: case iris_1825i_13.FORGLOOP: case iris_1825i_13.LOADKX:
    case iris_1825i_13.FASTCALL2: case iris_1825i_13.FASTCALL2K: case iris_1825i_13.FASTCALL3: case iris_1825i_13.JUMPXEQKNIL:
      case iris_1825i_13.JUMPXEQKB: case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS: case iris_1825i_13.GETUDATAKS:
        case iris_1825i_13.SETUDATAKS: case iris_1825i_13.NAMECALLUDATA: case iris_1825i_13.NEWCLASSMEMBER: case iris_1825i_13.CALLFB:
		case iris_1825i_13.CMPPROTO: case iris_1825i_13.NEWCLASS:
      return true
    default: return false;
  }
}
function iris_1825i_31 (iris_1825i_30) { return iris_1825i_29(iris_1825i_30)?2:1 }
function iris_1825i_32 (iris_1825i_30) {
	switch (iris_1825i_30) {
		case iris_1825i_13.JUMP: case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT: case iris_1825i_13.JUMPIFEQ:
    case iris_1825i_13.JUMPIFLE: case iris_1825i_13.JUMPIFLT: case iris_1825i_13.JUMPIFNOTEQ: case iris_1825i_13.JUMPIFNOTLE:
		case iris_1825i_13.JUMPIFNOTLT: case iris_1825i_13.FORNPREP: case iris_1825i_13.FORNLOOP: case iris_1825i_13.FORGPREP:
    case iris_1825i_13.FORGLOOP: case iris_1825i_13.FORGPREP_INEXT: case iris_1825i_13.FORGPREP_NEXT: case iris_1825i_13.JUMPBACK:
        case iris_1825i_13.JUMPXEQKNIL: case iris_1825i_13.JUMPXEQKB: case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS:
        case iris_1825i_13.CMPPROTO:
      return true
        default: return false;
   }
}
function iris_1825i_33(iris_1825i_30) { return iris_1825i_30===iris_1825i_13.FASTCALL||iris_1825i_30===iris_1825i_13.FASTCALL1||iris_1825i_30===iris_1825i_13.FASTCALL2||iris_1825i_30===iris_1825i_13.FASTCALL2K||iris_1825i_30===iris_1825i_13.FASTCALL3||iris_1825i_30===iris_1825i_13.FASTPCALL }
function iris_1825i_34(iris_1825i_35,iris_1825i_36) {
	const iris_1825i_37=iris_1825i_35[iris_1825i_36], iris_1825i_30=iris_1825i_21(iris_1825i_37)
   if (iris_1825i_32(iris_1825i_30)) return iris_1825i_36+iris_1825i_19(iris_1825i_37)+1;
	if (iris_1825i_33(iris_1825i_30)) return iris_1825i_36+iris_1825i_18(iris_1825i_37)+2;
    if (iris_1825i_30===iris_1825i_13.JUMPX) return iris_1825i_36+iris_1825i_20(iris_1825i_37)+1
    if (iris_1825i_30===iris_1825i_13.LOADB&&iris_1825i_18(iris_1825i_37)) return iris_1825i_36+iris_1825i_18(iris_1825i_37)+1
   return -1
}


const iris_1825i_38=3, iris_1825i_39=14, iris_1825i_40=100;

class iris_1825i_41 {
  constructor(iris_1825i_106) { this.data=iris_1825i_106; this.size=iris_1825i_106.length; this.offset=0 }
   readU8() { return this.offset+1>this.size?null:this.data[this.offset++] }
read_u32 () {
      if (this.offset+4>this.size) return null;
    let iris_1825i_42=0;
		iris_1825i_42|=this.data[this.offset++]; iris_1825i_42|=this.data[this.offset++]<<8;
    iris_1825i_42|=this.data[this.offset++]<<16; iris_1825i_42|=this.data[this.offset++]<<24;
    return iris_1825i_42>>>0;
    }
read_i32 () {
        if (this.offset+4>this.size) return null;
		let iris_1825i_42=0;
        iris_1825i_42|=this.data[this.offset++]; iris_1825i_42|=this.data[this.offset++]<<8
        iris_1825i_42|=this.data[this.offset++]<<16; iris_1825i_42|=this.data[this.offset++]<<24;
        return iris_1825i_42
  }
read_u64 () {
        if (this.offset+8>this.size) return null;
      let iris_1825i_43=0
    iris_1825i_43|=this.data[this.offset++]; iris_1825i_43|=this.data[this.offset++]<<8;
      iris_1825i_43|=this.data[this.offset++]<<16; iris_1825i_43|=this.data[this.offset++]<<24
      let iris_1825i_44=0
      iris_1825i_44|=this.data[this.offset++]; iris_1825i_44|=this.data[this.offset++]<<8
		iris_1825i_44|=this.data[this.offset++]<<16; iris_1825i_44|=this.data[this.offset++]<<24
		return (iris_1825i_44*0x100000000+iris_1825i_43)>>>0;
  }
read_f32 () {
        if (this.offset+4>this.size) return null
        const iris_1825i_45=new Uint8Array(4)
    for (let iris_1825i_5=0;iris_1825i_5<4;iris_1825i_5++) iris_1825i_45[iris_1825i_5]=this.data[this.offset++]
		return new DataView(iris_1825i_45.buffer).getFloat32(0,true);
	}
read_f64 () {
		if (this.offset+8>this.size) return null;
      const iris_1825i_45=new Uint8Array(8);
      for (let iris_1825i_5=0;iris_1825i_5<8;iris_1825i_5++) iris_1825i_45[iris_1825i_5]=this.data[this.offset++]
		return new DataView(iris_1825i_45.buffer).getFloat64(0,true)
  }
  skip(iris_1825i_251) { if (this.offset+iris_1825i_251>this.size) return false; this.offset+=iris_1825i_251; return true }
   take(iris_1825i_251) { if (!this.skip(iris_1825i_251)) return null; return this.data.subarray(this.offset-iris_1825i_251,this.offset) }
varint () {
      let iris_1825i_4=0
    for (let iris_1825i_46 = 0; iris_1825i_46 < 35; iris_1825i_46+=7) {
			const iris_1825i_47=this.readU8()
			if (iris_1825i_47===null) return null
      iris_1825i_4|=(iris_1825i_47&0x7f)<<iris_1825i_46
         if ((iris_1825i_47&0x80)===0) return iris_1825i_4>>>0
      }
      return null;
    }
varint64() {
    let iris_1825i_4=0;
		for (let iris_1825i_46 = 0; iris_1825i_46 < 70; iris_1825i_46+=7) {
            const iris_1825i_47=this.readU8();
			if (iris_1825i_47===null) return null
            iris_1825i_4|=(iris_1825i_47&0x7f)<<iris_1825i_46
            if ((iris_1825i_47&0x80)===0) return iris_1825i_4>>>0;
      }
		return null
   }
}



// first op is always PREPVARARGS, back the key out of it
function iris_1825i_48(iris_1825i_49) {
	if (iris_1825i_49.length===0) return 1;
    const iris_1825i_50=iris_1825i_49[0]&0xff;
   if (iris_1825i_50===iris_1825i_13.PREPVARARGS) return 1;
   // key has to be odd so the multiply stays invertible
for (let iris_1825i_51 = 1; iris_1825i_51 < 256; iris_1825i_51+=2) {
		if (((iris_1825i_50*iris_1825i_51)&0xff)===iris_1825i_13.PREPVARARGS) return iris_1825i_51
  }
  return 1;
}
function iris_1825i_52 (iris_1825i_35,iris_1825i_51) {
	if (iris_1825i_51===1) return;
	for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_35.length; iris_1825i_5++) {
      const iris_1825i_50=iris_1825i_35[iris_1825i_5]&0xff
		iris_1825i_35[iris_1825i_5]=(iris_1825i_35[iris_1825i_5]&0xffffff00)|((iris_1825i_50*iris_1825i_51)&0xff)
    if (iris_1825i_29(iris_1825i_35[iris_1825i_5]&0xff)&&iris_1825i_5+1<iris_1825i_35.length) iris_1825i_5++
    }
}

function iris_1825i_53 (iris_1825i_54,iris_1825i_55,iris_1825i_56,iris_1825i_57) {
    const iris_1825i_58=iris_1825i_55.protos[iris_1825i_56]
  iris_1825i_58.id=iris_1825i_56

	if (iris_1825i_57>=12) {
      const iris_1825i_59=iris_1825i_54.varint()
      if (iris_1825i_59===null) return false;
    const iris_1825i_60=iris_1825i_54.readU8(),iris_1825i_61=iris_1825i_54.readU8(),iris_1825i_62=iris_1825i_54.readU8(),iris_1825i_63=iris_1825i_54.readU8();
		if (iris_1825i_60===null||iris_1825i_61===null||iris_1825i_62===null||iris_1825i_63===null) return false;
    iris_1825i_58.maxstack=iris_1825i_60; iris_1825i_58.numparams=iris_1825i_61; iris_1825i_58.nups=iris_1825i_62; iris_1825i_58.is_vararg=iris_1825i_63
	} else {
        const iris_1825i_60=iris_1825i_54.readU8(),iris_1825i_61=iris_1825i_54.readU8(),iris_1825i_62=iris_1825i_54.readU8(),iris_1825i_63=iris_1825i_54.readU8()
    if (iris_1825i_60===null||iris_1825i_61===null||iris_1825i_62===null||iris_1825i_63===null) return false;
		iris_1825i_58.maxstack=iris_1825i_60; iris_1825i_58.numparams=iris_1825i_61; iris_1825i_58.nups=iris_1825i_62; iris_1825i_58.is_vararg=iris_1825i_63
  }

  if (iris_1825i_57>=4) {
    const iris_1825i_64=iris_1825i_54.readU8()
    if (iris_1825i_64===null) return false;
      iris_1825i_58.flags=iris_1825i_64;
    const iris_1825i_65=iris_1825i_54.varint();
    if (iris_1825i_65===null) return false
		if (iris_1825i_65) { if (!iris_1825i_54.skip(iris_1825i_65)) return false }
	}


	const iris_1825i_66=iris_1825i_54.varint();
   if (iris_1825i_66===null) return false
  iris_1825i_58.code=new Array(iris_1825i_66).fill(0);
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_66; iris_1825i_5++) {
    const iris_1825i_67=iris_1825i_54.read_u32()
    if (iris_1825i_67===null) return false;
      iris_1825i_58.code[iris_1825i_5]=iris_1825i_67>>>0
  }

  const iris_1825i_68=iris_1825i_54.varint()
   if (iris_1825i_68===null) return false;
  iris_1825i_58.k=new Array(iris_1825i_68);
    for (let iris_1825i_69=0;iris_1825i_69<iris_1825i_68;iris_1825i_69++) iris_1825i_58.k[iris_1825i_69]={ kind:iris_1825i_14.Nil, boolean:false, number:0, importId:0, str:"", closureProto:-1, vec:[], table:[], integer:0 }

  for (let iris_1825i_69 = 0; iris_1825i_69 < iris_1825i_68; iris_1825i_69++) {
    const iris_1825i_70=iris_1825i_54.readU8()
    if (iris_1825i_70===null) return false
      const iris_1825i_67=iris_1825i_58.k[iris_1825i_69]
    switch (iris_1825i_70) {
         case 0: iris_1825i_67.kind=iris_1825i_14.Nil; break;
			case 1: { const iris_1825i_42=iris_1825i_54.readU8(); if (iris_1825i_42===null) return false; iris_1825i_67.kind=iris_1825i_14.Boolean; iris_1825i_67.boolean=iris_1825i_42!==0; break }
      case 2: { const iris_1825i_71=iris_1825i_54.read_f64(); if (iris_1825i_71===null) return false; iris_1825i_67.kind=iris_1825i_14.Number; iris_1825i_67.number=iris_1825i_71; break }
      case 3: {
            const iris_1825i_72=iris_1825i_54.varint();
				if (iris_1825i_72===null) return false;
                if (iris_1825i_72-1<0||iris_1825i_72-1>=iris_1825i_55.strings.length) return false;
				iris_1825i_67.kind=iris_1825i_14.String; iris_1825i_67.str=iris_1825i_55.strings[iris_1825i_72-1]
        break
      }
			case 4: { const iris_1825i_72=iris_1825i_54.read_u32(); if (iris_1825i_72===null) return false; iris_1825i_67.kind=iris_1825i_14.Import; iris_1825i_67.importId=iris_1825i_72>>>0; break }
      case 5: {
        const iris_1825i_73=iris_1825i_54.varint();
				if (iris_1825i_73===null) return false
				iris_1825i_67.kind=iris_1825i_14.Table
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_73; iris_1825i_5++) {
                    const iris_1825i_51=iris_1825i_54.varint();
          if (iris_1825i_51===null) return false;
          iris_1825i_67.table.push({ key:iris_1825i_51|0, value:-1 })
        }
				break;
			}
			case 6: {
        const iris_1825i_74=iris_1825i_54.varint()
				if (iris_1825i_74===null) return false;
        if (iris_1825i_74>=iris_1825i_55.protos.length) return false
        iris_1825i_67.kind=iris_1825i_14.Closure; iris_1825i_67.closureProto=iris_1825i_74|0;
        break;
      }
      case 7: {
				const iris_1825i_75=iris_1825i_54.read_f32(),iris_1825i_76=iris_1825i_54.read_f32(),iris_1825i_77=iris_1825i_54.read_f32(),iris_1825i_78=iris_1825i_54.read_f32()
            if (iris_1825i_75===null||iris_1825i_76===null||iris_1825i_77===null||iris_1825i_78===null) return false
                iris_1825i_67.kind=iris_1825i_14.Vector; iris_1825i_67.vec=[iris_1825i_75,iris_1825i_76,iris_1825i_77]
        break;
			}
            case 8: {
        const iris_1825i_73=iris_1825i_54.varint();
        if (iris_1825i_73===null) return false;
				iris_1825i_67.kind=iris_1825i_14.TableWithConstants
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_73; iris_1825i_5++) {
               const iris_1825i_51=iris_1825i_54.varint(),iris_1825i_79=iris_1825i_54.read_i32()
          if (iris_1825i_51===null||iris_1825i_79===null) return false
                    iris_1825i_67.table.push({ key:iris_1825i_51|0, value:iris_1825i_79|0 });
            }
        break
			}
			case 9: {
				const iris_1825i_80=iris_1825i_54.readU8(),iris_1825i_81=iris_1825i_54.varint64()
				if (iris_1825i_80===null||iris_1825i_81===null) return false;
        iris_1825i_67.kind=iris_1825i_14.Integer
				iris_1825i_67.integer=iris_1825i_80?(~iris_1825i_81+1)|0:iris_1825i_81|0;
				break
         }
         case 10: {
        const iris_1825i_23=iris_1825i_54.varint(),iris_1825i_47=iris_1825i_54.varint(),iris_1825i_82=iris_1825i_54.varint()
        if (iris_1825i_23===null||iris_1825i_47===null||iris_1825i_82===null) return false;
				for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_82; iris_1825i_5++) { const iris_1825i_83=iris_1825i_54.varint(); if (iris_1825i_83===null) return false }
				iris_1825i_67.kind=iris_1825i_14.ClassShape
        break;
			}
            case 11: {
        const iris_1825i_75=iris_1825i_54.read_f64(),iris_1825i_76=iris_1825i_54.read_f64(),iris_1825i_77=iris_1825i_54.read_f64(),iris_1825i_78=iris_1825i_54.read_f64();
        if (iris_1825i_75===null||iris_1825i_76===null||iris_1825i_77===null||iris_1825i_78===null) return false
				iris_1825i_67.kind=iris_1825i_14.VectorD; iris_1825i_67.vec=[iris_1825i_75,iris_1825i_76,iris_1825i_77]
				break
			}
         default: return false;
    }
	}

  const iris_1825i_84=iris_1825i_54.varint()
  if (iris_1825i_84===null) return false;
    iris_1825i_58.children=new Array(iris_1825i_84)
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_84; iris_1825i_5++) {
      const iris_1825i_74=iris_1825i_54.varint()
		if (iris_1825i_74===null) return false
    if (iris_1825i_74>=iris_1825i_55.protos.length) return false
    iris_1825i_58.children[iris_1825i_5]=iris_1825i_74>>>0
  }

   const iris_1825i_85=iris_1825i_54.varint();
  if (iris_1825i_85===null) return false
	iris_1825i_58.linedefined=iris_1825i_85|0

    {
      const iris_1825i_86=iris_1825i_54.varint();
      if (iris_1825i_86===null) return false;
      const iris_1825i_46=iris_1825i_55.strings[iris_1825i_86-1]
    if (iris_1825i_46) iris_1825i_58.debugname=iris_1825i_46;
	}

    const iris_1825i_87=iris_1825i_54.readU8();
   if (iris_1825i_87===null) return false;
  if (iris_1825i_87) {
		const iris_1825i_88=iris_1825i_54.readU8()
		if (iris_1825i_88===null) return false
      const iris_1825i_12=new Array(iris_1825i_66)
      for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_66; iris_1825i_5++) {
            const iris_1825i_47=iris_1825i_54.readU8();
            if (iris_1825i_47===null) return false
      iris_1825i_12[iris_1825i_5]=iris_1825i_47;
    }
    const iris_1825i_89=((iris_1825i_66-1)>>iris_1825i_88)+1
    const iris_1825i_90=new Array(iris_1825i_89)
		for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_89; iris_1825i_5++) {
			const iris_1825i_42=iris_1825i_54.read_i32()
      if (iris_1825i_42===null) return false;
			iris_1825i_90[iris_1825i_5]=iris_1825i_42
      }
      iris_1825i_58.lineinfo=new Array(iris_1825i_66).fill(-1);
      let iris_1825i_91=0, iris_1825i_69=0
      for (let iris_1825i_92 = 0; iris_1825i_92 < iris_1825i_89&&iris_1825i_69 < iris_1825i_66; iris_1825i_92++) {
            iris_1825i_91+=iris_1825i_90[iris_1825i_92]
      const iris_1825i_93=Math.min(iris_1825i_66,(iris_1825i_92+1)<<iris_1825i_88);
			let iris_1825i_94=0
			for (;iris_1825i_69<iris_1825i_93;iris_1825i_69++) {
            iris_1825i_94+=iris_1825i_12[iris_1825i_69]
				iris_1825i_58.lineinfo[iris_1825i_69]=iris_1825i_91+iris_1825i_94;
      }
		}
  }


	const iris_1825i_95=iris_1825i_54.readU8()
  if (iris_1825i_95===null) return false;
  if (iris_1825i_95) {
    const iris_1825i_96=iris_1825i_54.varint()
    if (iris_1825i_96===null) return false
    iris_1825i_58.locvars=[]
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_96; iris_1825i_5++) {
			const iris_1825i_86=iris_1825i_54.varint(),iris_1825i_97=iris_1825i_54.varint(),iris_1825i_98=iris_1825i_54.varint(),iris_1825i_99=iris_1825i_54.readU8();
      if (iris_1825i_86===null||iris_1825i_97===null||iris_1825i_98===null||iris_1825i_99===null) return false;
			const iris_1825i_100={ name:'', startpc:iris_1825i_97|0, endpc:iris_1825i_98|0, reg: iris_1825i_99 }
			const iris_1825i_46=iris_1825i_55.strings[iris_1825i_86-1]
         if (iris_1825i_46) iris_1825i_100.name=iris_1825i_46;
			iris_1825i_58.locvars.push(iris_1825i_100)
      }
    const iris_1825i_101=iris_1825i_54.varint();
		if (iris_1825i_101===null) return false
    iris_1825i_58.upnames=[]
    for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_101; iris_1825i_5++) {
         const iris_1825i_86=iris_1825i_54.varint()
			if (iris_1825i_86===null) return false
         iris_1825i_58.upnames.push(iris_1825i_55.strings[iris_1825i_86-1]||"");
    }
    }

	if (iris_1825i_57>=11) {
    const iris_1825i_102=iris_1825i_54.varint();
    if (iris_1825i_102===null) return false;
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_102; iris_1825i_5++) {
			const iris_1825i_103=iris_1825i_54.readU8(),iris_1825i_36=iris_1825i_54.varint();
      if (iris_1825i_103===null||iris_1825i_36===null) return false;
      }
	}


   if (iris_1825i_57>=12) {
		if ((iris_1825i_58.flags&(1<<3))!==0) {
         const iris_1825i_104=iris_1825i_54.varint64();
            if (iris_1825i_104===null) return false
    }
  }

    return true
}

function iris_1825i_105 (iris_1825i_106) {
  const iris_1825i_4={ strings:[], protos:[], main:0, encodingKey:1, version:0, typeversion:0 }
	const iris_1825i_54=new iris_1825i_41(iris_1825i_106);

  const iris_1825i_107=iris_1825i_54.readU8();
  if (iris_1825i_107===null) throw new Error("bytecode is too small to be valid")
    const iris_1825i_57=iris_1825i_107>>>0;
	iris_1825i_4.version=iris_1825i_57;


  if (iris_1825i_57===0) {
        let iris_1825i_108='failed to load bytecode';
		if (iris_1825i_54.offset<iris_1825i_106.length) iris_1825i_108=iris_1825i_11(iris_1825i_106.subarray(iris_1825i_54.offset))
    throw new Error(iris_1825i_108)
   }
  if ((iris_1825i_57<iris_1825i_38||iris_1825i_57>iris_1825i_39)&&iris_1825i_57!==iris_1825i_40)
      throw new Error('bytecode version mismatch (expected ['+iris_1825i_38+".."+iris_1825i_39+'], got '+iris_1825i_57+')');

  let iris_1825i_109=0
	if (iris_1825i_57>=4) {
        const iris_1825i_110=iris_1825i_54.readU8();
      if (iris_1825i_110===null) throw new Error("unexpected end of bytecode")
		iris_1825i_109=iris_1825i_110>>>0;
        iris_1825i_4.typeversion=iris_1825i_109
    if (iris_1825i_109<1||iris_1825i_109>3)
      throw new Error('bytecode type info version mismatch (expected [1..3], got '+iris_1825i_109+")")
	}


	const iris_1825i_111=iris_1825i_54.varint()
    if (iris_1825i_111===null) throw new Error('unexpected end of bytecode reading string count')
   iris_1825i_4.strings=new Array(iris_1825i_111)
	for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_111; iris_1825i_5++) {
      const iris_1825i_112=iris_1825i_54.varint()
		if (iris_1825i_112===null) throw new Error('unexpected end of bytecode reading string length');
    const iris_1825i_12=iris_1825i_54.take(iris_1825i_112)
    if (iris_1825i_12===null) throw new Error('unexpected end of bytecode reading string data');
      iris_1825i_4.strings[iris_1825i_5]=iris_1825i_11(iris_1825i_12)
	}

  if (iris_1825i_109===3) {
    let iris_1825i_56=iris_1825i_54.readU8();
    if (iris_1825i_56===null) throw new Error('unexpected end of bytecode reading userdata remap');
		while (iris_1825i_56!==0) {
      const iris_1825i_86=iris_1825i_54.varint();
			if (iris_1825i_86===null) throw new Error('unexpected end of bytecode reading userdata remap name')
			if (iris_1825i_86===0||iris_1825i_86>iris_1825i_4.strings.length) throw new Error('invalid string reference in userdata remap table');
			iris_1825i_56=iris_1825i_54.readU8();
      if (iris_1825i_56===null) throw new Error("unexpected end of bytecode reading userdata remap index");
      }
  }

	const iris_1825i_113=iris_1825i_54.varint();
    if (iris_1825i_113===null) throw new Error('unexpected end of bytecode reading proto count');
   iris_1825i_4.protos=new Array(iris_1825i_113).fill(null).map(()=>({
    id:0,maxstack:0,numparams:0,nups:0,is_vararg:0,flags:0,code:new Array(0),k:[],
    children:[],lineinfo:[],linedefined:0,debugname:'',source:'',locvars:[],upnames:[],
  }));

  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_113; iris_1825i_5++) {
		if (!iris_1825i_53(iris_1825i_54,iris_1825i_4,iris_1825i_5,iris_1825i_57)) {
			throw new Error('failed to parse proto #'+iris_1825i_5);
		}
	}

  const iris_1825i_114=iris_1825i_54.varint();
  if (iris_1825i_114===null) throw new Error("unexpected end of bytecode reading main proto id")
    if (iris_1825i_114>=iris_1825i_4.protos.length) throw new Error('invalid main proto id')
   iris_1825i_4.main=iris_1825i_114|0;

	const iris_1825i_51=iris_1825i_48(iris_1825i_4.protos[iris_1825i_4.main].code)
	if (iris_1825i_51!==1) {
        for (const iris_1825i_58 of iris_1825i_4.protos) iris_1825i_52(iris_1825i_58.code,iris_1825i_51)
  }
  iris_1825i_4.encodingKey=iris_1825i_51|0


	// v14 added FASTPCALL at 89 and pushed NEWCLASS to 90, remap old files
if (iris_1825i_57>=iris_1825i_38&&iris_1825i_57<14) {
		for (const iris_1825i_58 of iris_1825i_4.protos) {
         for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_58.code.length; iris_1825i_5++) {
				if ((iris_1825i_58.code[iris_1825i_5]&0xff)===89)
               iris_1825i_58.code[iris_1825i_5]=(iris_1825i_58.code[iris_1825i_5]&0xffffff00)|iris_1825i_13.NEWCLASS
			}
    }
    }

   return iris_1825i_4
}


function iris_1825i_115(iris_1825i_42) {
	if (Number.isNaN(iris_1825i_42)) return '(0/0)'
    if (!Number.isFinite(iris_1825i_42)) return iris_1825i_42<0?'-(1/0)':'(1/0)';
  if (Math.floor(iris_1825i_42)===iris_1825i_42&&Math.abs(iris_1825i_42)<1e15) return String(Math.trunc(iris_1825i_42))
  let iris_1825i_46=iris_1825i_42.toPrecision(10)
    if (iris_1825i_46.indexOf('.')!==-1) {
      while (iris_1825i_46.length>0&&iris_1825i_46[iris_1825i_46.length-1]==='0') iris_1825i_46=iris_1825i_46.slice(0,-1)
        if (iris_1825i_46[iris_1825i_46.length-1]==='.') iris_1825i_46=iris_1825i_46.slice(0,-1);
    }
  return iris_1825i_46===''?"0":iris_1825i_46
}
function iris_1825i_116 (iris_1825i_46) {
    let iris_1825i_4='"';
   for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_46.length; iris_1825i_5++) {
    const iris_1825i_67=iris_1825i_46.charCodeAt(iris_1825i_5)
        if (iris_1825i_67===0x22) iris_1825i_4+='\\"';
    else if (iris_1825i_67===0x5c) iris_1825i_4+="\\\\";
		else if (iris_1825i_67===0x0a) iris_1825i_4+="\\n";
		else if (iris_1825i_67===0x0d) iris_1825i_4+="\\r";
    else if (iris_1825i_67===0x09) iris_1825i_4+="\\t"
    else if (iris_1825i_67<32) iris_1825i_4+="\\"+iris_1825i_67
    else iris_1825i_4+=iris_1825i_46[iris_1825i_5]
	}
   return iris_1825i_4+'"'
}
function iris_1825i_117 (iris_1825i_55,iris_1825i_72) {
   const iris_1825i_82=iris_1825i_72>>>30
	const iris_1825i_118=(iris_1825i_119)=>{ if (iris_1825i_119<0||iris_1825i_119>=iris_1825i_55.k.length||iris_1825i_55.k[iris_1825i_119].kind!==iris_1825i_14.String) return "?"; return iris_1825i_55.k[iris_1825i_119].str }
  let iris_1825i_120=iris_1825i_118((iris_1825i_72>>>20)&1023)
  if (iris_1825i_82>=2) iris_1825i_120+='.'+iris_1825i_118((iris_1825i_72>>>10)&1023);
    if (iris_1825i_82>=3) iris_1825i_120+='.'+iris_1825i_118(iris_1825i_72&1023)
	return iris_1825i_120;
}

function iris_1825i_121(iris_1825i_122,iris_1825i_55,iris_1825i_67) {
	switch (iris_1825i_67.kind) {
    case iris_1825i_14.Nil: iris_1825i_122.push('nil'); break;
      case iris_1825i_14.Boolean: iris_1825i_122.push(iris_1825i_67.boolean?'true':'false'); break
    case iris_1825i_14.Number: iris_1825i_122.push(iris_1825i_115(iris_1825i_67.number)); break;
      case iris_1825i_14.Integer: iris_1825i_122.push(String(iris_1825i_67.integer)); break;
        case iris_1825i_14.String: iris_1825i_122.push(iris_1825i_116(iris_1825i_67.str)); break
		case iris_1825i_14.Import: iris_1825i_122.push('@import:'+iris_1825i_55.debugname+':'+iris_1825i_117(iris_1825i_55,iris_1825i_67.importId)); break
		case iris_1825i_14.Table:
        case iris_1825i_14.TableWithConstants: {
			iris_1825i_122.push('{ ');
			for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_67.table.length; iris_1825i_5++) {
				if (iris_1825i_5) iris_1825i_122.push(', ')
            const iris_1825i_123=iris_1825i_67.table[iris_1825i_5]
                if (iris_1825i_123.key>=0&&iris_1825i_123.key<iris_1825i_55.k.length) iris_1825i_121(iris_1825i_122,iris_1825i_55,iris_1825i_55.k[iris_1825i_123.key]); else iris_1825i_122.push("?key")
        iris_1825i_122.push(' = ');
            if (iris_1825i_123.value>=0) { if (iris_1825i_123.value<iris_1825i_55.k.length) iris_1825i_121(iris_1825i_122,iris_1825i_55,iris_1825i_55.k[iris_1825i_123.value]); else iris_1825i_122.push('?') } else iris_1825i_122.push("0");
      }
            iris_1825i_122.push(" }");
      break;
      }
    case iris_1825i_14.Closure: iris_1825i_122.push("@closure["+iris_1825i_67.closureProto+"]"); break
        case iris_1825i_14.Vector:
		case iris_1825i_14.VectorD: iris_1825i_122.push('vector('+iris_1825i_67.vec[0]+", "+iris_1825i_67.vec[1]+", "+iris_1825i_67.vec[2]+")"); break;
      default: iris_1825i_122.push('?'); break
	}
}
function iris_1825i_124 (iris_1825i_55,iris_1825i_125) {
  if (iris_1825i_125<0||iris_1825i_125>=iris_1825i_55.k.length) return '?';
  const iris_1825i_122=[]
  iris_1825i_121(iris_1825i_122,iris_1825i_55,iris_1825i_55.k[iris_1825i_125])
  return iris_1825i_122.join('')
}
function iris_1825i_126 (iris_1825i_4,iris_1825i_127,iris_1825i_128) {
   const iris_1825i_55=iris_1825i_127.protos[iris_1825i_128]
    iris_1825i_4.push("== proto "+iris_1825i_128+' "'+iris_1825i_55.debugname+'" line '+iris_1825i_55.linedefined+"\n");
  iris_1825i_4.push('-- maxstack='+iris_1825i_55.maxstack+' params='+iris_1825i_55.numparams+' nups='+iris_1825i_55.nups+" vararg="+iris_1825i_55.is_vararg+' flags='+iris_1825i_55.flags+"\n")
  iris_1825i_4.push('-- upvalue names: ');
	for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_55.upnames.length; iris_1825i_129++) {
		if (iris_1825i_129) iris_1825i_4.push(', ')
      iris_1825i_4.push('"'+iris_1825i_55.upnames[iris_1825i_129]+'"');
	}
   iris_1825i_4.push("\n")
	iris_1825i_4.push("-- constants:\n")
    for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_55.k.length; iris_1825i_125++) {
    const iris_1825i_122=[]
		iris_1825i_121(iris_1825i_122,iris_1825i_55,iris_1825i_55.k[iris_1825i_125])
      iris_1825i_4.push('  ['+iris_1825i_125+"] "+iris_1825i_122.join('')+"\n");
  }
   iris_1825i_4.push("\n")
  iris_1825i_4.push("  idx     line  insn\n");
   let iris_1825i_5=0;
	while (iris_1825i_5<iris_1825i_55.code.length) {
    const iris_1825i_37=iris_1825i_55.code[iris_1825i_5], iris_1825i_30=iris_1825i_21(iris_1825i_37);
      const iris_1825i_130=[]
      iris_1825i_130.push('  '+(iris_1825i_37>>>0).toString(16)+"   ")
        iris_1825i_130.push(iris_1825i_5+"      ")
    iris_1825i_130.push((iris_1825i_55.lineinfo.length===0||iris_1825i_55.lineinfo[iris_1825i_5]<0)?"-":String(iris_1825i_55.lineinfo[iris_1825i_5]));
    iris_1825i_130.push('     '+iris_1825i_28(iris_1825i_30));
        const iris_1825i_131=()=>iris_1825i_130.push(" A="+iris_1825i_16(iris_1825i_37))
      const iris_1825i_132=()=>iris_1825i_130.push(" B="+iris_1825i_17(iris_1825i_37)+' C='+iris_1825i_18(iris_1825i_37))
    switch (iris_1825i_30) {
            case iris_1825i_13.NOP: case iris_1825i_13.BREAK: case iris_1825i_13.NATIVECALL: case iris_1825i_13.COVERAGE:
				iris_1825i_130.push(" D="+iris_1825i_20(iris_1825i_37)); break
      case iris_1825i_13.LOADNIL: case iris_1825i_13.LOADB: case iris_1825i_13.MOVE: case iris_1825i_13.GETGLOBAL:
      case iris_1825i_13.GETUPVAL: case iris_1825i_13.SETUPVAL: case iris_1825i_13.CLOSEUPVALS: case iris_1825i_13.NEWCLOSURE:
			case iris_1825i_13.RETURN: case iris_1825i_13.JUMP: case iris_1825i_13.JUMPBACK: case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT:
      case iris_1825i_13.NOT: case iris_1825i_13.MINUS: case iris_1825i_13.LENGTH: case iris_1825i_13.DUPTABLE: case iris_1825i_13.LOADKX:
      case iris_1825i_13.JUMPX: case iris_1825i_13.PREPVARARGS: case iris_1825i_13.GETVARARGS: case iris_1825i_13.SETLIST:
      case iris_1825i_13.NEWTABLE: case iris_1825i_13.FORNPREP: case iris_1825i_13.FORNLOOP: case iris_1825i_13.FORGPREP:
         case iris_1825i_13.FORGPREP_INEXT: case iris_1825i_13.FORGPREP_NEXT: case iris_1825i_13.FORGLOOP:
				iris_1825i_131(); break
      case iris_1825i_13.GETTABLE: case iris_1825i_13.SETTABLE: case iris_1825i_13.GETTABLEN: case iris_1825i_13.SETTABLEN:
			case iris_1825i_13.GETTABLEKS: case iris_1825i_13.SETTABLEKS: case iris_1825i_13.ADD: case iris_1825i_13.SUB: case iris_1825i_13.MUL:
      case iris_1825i_13.DIV: case iris_1825i_13.MOD: case iris_1825i_13.POW: case iris_1825i_13.AND: case iris_1825i_13.OR: case iris_1825i_13.ADDK:
         case iris_1825i_13.SUBK: case iris_1825i_13.MULK: case iris_1825i_13.DIVK: case iris_1825i_13.MODK: case iris_1825i_13.POWK: case iris_1825i_13.ANDK:
      case iris_1825i_13.ORK: case iris_1825i_13.SUBRK: case iris_1825i_13.DIVRK: case iris_1825i_13.IDIV: case iris_1825i_13.IDIVK:
      case iris_1825i_13.FASTPCALL:
            iris_1825i_132(); break
      case iris_1825i_13.CONCAT: iris_1825i_132(); break
      case iris_1825i_13.SETGLOBAL: case iris_1825i_13.SETUPVAL: iris_1825i_130.push(" A="+iris_1825i_16(iris_1825i_37)+" B="+iris_1825i_17(iris_1825i_37)); break
			case iris_1825i_13.NAMECALL: iris_1825i_130.push(' A='+iris_1825i_16(iris_1825i_37)+' B='+iris_1825i_17(iris_1825i_37)+' C='+iris_1825i_18(iris_1825i_37)); break;
			case iris_1825i_13.CALL: case iris_1825i_13.CALLFB:
        iris_1825i_130.push(" A="+iris_1825i_16(iris_1825i_37)+' B='+iris_1825i_17(iris_1825i_37)+' C='+iris_1825i_18(iris_1825i_37)); break;
         case iris_1825i_13.LOADN: iris_1825i_130.push(" D="+iris_1825i_19(iris_1825i_37)); break
			case iris_1825i_13.LOADK: iris_1825i_130.push(' D='+iris_1825i_19(iris_1825i_37)+' (k'+iris_1825i_124(iris_1825i_55,iris_1825i_19(iris_1825i_37))+')'); break;
      case iris_1825i_13.RETURN: iris_1825i_130.push(" A="+iris_1825i_16(iris_1825i_37)+' B='+iris_1825i_17(iris_1825i_37)); break
      case iris_1825i_13.JUMP: case iris_1825i_13.JUMPBACK: case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT:
                iris_1825i_130.push(' A='+iris_1825i_16(iris_1825i_37)+' D='+iris_1825i_19(iris_1825i_37)); break
			default: break;
      }
    const iris_1825i_133=iris_1825i_34(iris_1825i_55.code,iris_1825i_5)
        if (iris_1825i_133>=0) iris_1825i_130.push(" -> "+iris_1825i_133)
      if (iris_1825i_29(iris_1825i_30)&&iris_1825i_5+1<iris_1825i_55.code.length) {
         const iris_1825i_134=iris_1825i_55.code[iris_1825i_5+1]
      iris_1825i_130.push(' ; aux='+(iris_1825i_134>>>0).toString(16))
         if (iris_1825i_30===iris_1825i_13.NEWTABLE) iris_1825i_130.push(' (hash'+iris_1825i_18(iris_1825i_37)+', array '+iris_1825i_134+')');
			if (iris_1825i_30===iris_1825i_13.SETLIST) iris_1825i_130.push(' (base '+iris_1825i_134+')');
      if (iris_1825i_30===iris_1825i_13.FORGLOOP) iris_1825i_130.push(' (vars '+(iris_1825i_134&0xff)+((iris_1825i_134>>>31)?" ipairs":'')+')')
      if (iris_1825i_30===iris_1825i_13.GETIMPORT) iris_1825i_130.push(' (import '+(iris_1825i_134>>>30)+': '+iris_1825i_22(iris_1825i_134)+','+iris_1825i_24(iris_1825i_134)+','+(iris_1825i_134&0x3ff)+' => '+iris_1825i_117(iris_1825i_55,iris_1825i_134)+')')
         if (iris_1825i_30===iris_1825i_13.JUMPIFEQ||iris_1825i_30===iris_1825i_13.JUMPIFLE||iris_1825i_30===iris_1825i_13.JUMPIFLT||
        iris_1825i_30===iris_1825i_13.JUMPIFNOTEQ||iris_1825i_30===iris_1825i_13.JUMPIFNOTLE||iris_1825i_30===iris_1825i_13.JUMPIFNOTLT)
                iris_1825i_130.push(" (aux reg "+(iris_1825i_134&0xff)+")")
            if (iris_1825i_30===iris_1825i_13.GETTABLEKS||iris_1825i_30===iris_1825i_13.SETTABLEKS||iris_1825i_30===iris_1825i_13.NAMECALL||
                iris_1825i_30===iris_1825i_13.GETGLOBAL||iris_1825i_30===iris_1825i_13.SETGLOBAL||iris_1825i_30===iris_1825i_13.LOADKX)
				iris_1825i_130.push(" (k"+iris_1825i_134+" "+iris_1825i_124(iris_1825i_55,iris_1825i_134)+')')
		}
      iris_1825i_4.push(iris_1825i_130.join('')+"\n");
      if (iris_1825i_30===iris_1825i_13.NEWCLOSURE&&iris_1825i_19(iris_1825i_37)>=0&&iris_1825i_19(iris_1825i_37)<iris_1825i_55.children.length) {
      const iris_1825i_135=iris_1825i_127.protos[iris_1825i_55.children[iris_1825i_19(iris_1825i_37)]]
      for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_135.nups; iris_1825i_129++) {
            iris_1825i_5++
        if (iris_1825i_5>=iris_1825i_55.code.length) break;
            const iris_1825i_136=iris_1825i_55.code[iris_1825i_5]
        const iris_1825i_137=iris_1825i_16(iris_1825i_136)===1?"REF":(iris_1825i_16(iris_1825i_136)===2?'UPVAL':'VAL');
				iris_1825i_4.push('  '+(iris_1825i_136>>>0).toString(16)+"   "+iris_1825i_5+'      -     CAPTURE '+iris_1825i_137+' B='+iris_1825i_17(iris_1825i_136)+"\n");
         }
    }
		if (iris_1825i_29(iris_1825i_30)) iris_1825i_5++
    iris_1825i_5++
  }
	iris_1825i_4.push("\n")
}
function iris_1825i_138 (iris_1825i_127) {
    const iris_1825i_4=[]
  iris_1825i_4.push("-- iris disassembly\n")
  iris_1825i_4.push('-- protos: '+iris_1825i_127.protos.length+', strings: '+iris_1825i_127.strings.length+"\n\n")
  for (let iris_1825i_128=0;iris_1825i_128<iris_1825i_127.protos.length;iris_1825i_128++) iris_1825i_126(iris_1825i_4,iris_1825i_127,iris_1825i_128);
  return iris_1825i_4.join('')
}
function iris_1825i_139 (iris_1825i_127,iris_1825i_56) {
   if (iris_1825i_56<0||iris_1825i_56>=iris_1825i_127.protos.length) return '-- no proto '+iris_1825i_56+"\n"
  const iris_1825i_4=[]
   iris_1825i_126(iris_1825i_4,iris_1825i_127,iris_1825i_56)
   return iris_1825i_4.join("");
}

function iris_1825i_140(iris_1825i_141) {
  const iris_1825i_4=[]
   let iris_1825i_142=0,iris_1825i_143=0;
	const iris_1825i_144=(iris_1825i_67)=>{
    const iris_1825i_35=iris_1825i_67.charCodeAt(0)
    if (iris_1825i_35>=0x41&&iris_1825i_35<=0x5a) return iris_1825i_35-0x41;
      if (iris_1825i_35>=0x61&&iris_1825i_35<=0x7a) return iris_1825i_35-0x61+26
      if (iris_1825i_35>=0x30&&iris_1825i_35<=0x39) return iris_1825i_35-0x30+52;
		if (iris_1825i_35===0x2b) return 62;
		if (iris_1825i_35===0x2f) return 63
    return -1
  }
  for (const iris_1825i_67 of iris_1825i_141) {
        if (iris_1825i_67==="\r"||iris_1825i_67==="\n"||iris_1825i_67===' '||iris_1825i_67==="\t") continue
    if (iris_1825i_67==="=") break
		const iris_1825i_42=iris_1825i_144(iris_1825i_67)
    if (iris_1825i_42<0) return null;
    iris_1825i_142=(iris_1825i_142<<6)|iris_1825i_42
    iris_1825i_143+=6;
		if (iris_1825i_143>=8) {
			iris_1825i_143-=8;
      iris_1825i_4.push((iris_1825i_142>>iris_1825i_143)&0xff)
    }
  }
  return new Uint8Array(iris_1825i_4);
}


const iris_1825i_145 = {
  indent: 'tab',
   typeAnnotations: 'default',
  discardNames: "named",
    generatedNames: "readable",
  inferredNameCase: 'preserve',
	preferConst: false,
  ifExpressions: true,
	earlyReturn: true,
    earlyContinue: true,
  interpolatedStrings: true,
    mathConstants: true,
  foldSingleUseTemps: true,
  undoInline: true,
   rerollUnrolledLoops: true,
   unfoldModuleTables: false,
	keepDead: true,
  unicodeStrings: true,
	upvalueComments: false,
  lineComments: false,
}

function iris_1825i_146() { return iris_1825i_145.indent === "tab" ? "\t" : " ".repeat(iris_1825i_145.indent) }

const iris_1825i_147 = new Set([
  'and','break','do',"else","elseif",'end',"false",'for',"function",'if',
  'in',"local",'nil',"not",'or','repeat','return',"then","true","until",
  'while','continue',
])

function iris_1825i_148(iris_1825i_46) {
  if (iris_1825i_46.length === 0) return false;
	const iris_1825i_149 = iris_1825i_46.charCodeAt(0)
  if (!((iris_1825i_149 >= 0x41 && iris_1825i_149 <= 0x5a) || (iris_1825i_149 >= 0x61 && iris_1825i_149 <= 0x7a) || iris_1825i_149 === 0x5f)) return false;
	for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_46.length; iris_1825i_5++) {
        const iris_1825i_67 = iris_1825i_46.charCodeAt(iris_1825i_5)
      if (!((iris_1825i_67 >= 0x41 && iris_1825i_67 <= 0x5a) || (iris_1825i_67 >= 0x61 && iris_1825i_67 <= 0x7a) || (iris_1825i_67 >= 0x30 && iris_1825i_67 <= 0x39) || iris_1825i_67 === 0x5f)) return false;
  }
	return !iris_1825i_147.has(iris_1825i_46)
}


function iris_1825i_150(iris_1825i_42) {
	if (Number.isNaN(iris_1825i_42)) return "(0/0)";
    if (!Number.isFinite(iris_1825i_42)) return iris_1825i_42 < 0 ? "-(1/0)" : '(1/0)'
    if (iris_1825i_145.mathConstants) {
    const iris_1825i_67 = iris_1825i_151(iris_1825i_42);
    if (iris_1825i_67) return iris_1825i_67
    }
   if (Math.floor(iris_1825i_42) === iris_1825i_42 && Math.abs(iris_1825i_42) < 1e15) return String(Math.trunc(iris_1825i_42));
  let iris_1825i_46 = iris_1825i_42.toPrecision(14)
	if (iris_1825i_46.indexOf(".") !== -1) {
    while (iris_1825i_46.length > 0 && iris_1825i_46[iris_1825i_46.length - 1] === "0") iris_1825i_46 = iris_1825i_46.slice(0, -1)
        if (iris_1825i_46[iris_1825i_46.length - 1] === ".") iris_1825i_46 = iris_1825i_46.slice(0, -1);
  }
  return iris_1825i_46 === '' ? "0" : iris_1825i_46
}


function iris_1825i_151 (iris_1825i_42) {
   const iris_1825i_152 = (iris_1825i_23, iris_1825i_47) => Math.abs(iris_1825i_23 - iris_1825i_47) < 5e-14;
  if (iris_1825i_152(iris_1825i_42, Math.PI)) return 'math.pi'
  if (iris_1825i_152(iris_1825i_42, Math.PI / 2)) return "math.pi / 2"
    if (iris_1825i_152(iris_1825i_42, Math.PI * 2)) return 'math.pi * 2'
  if (iris_1825i_152(iris_1825i_42, -Math.PI)) return "-math.pi";
	if (iris_1825i_152(iris_1825i_42, Math.E)) return "math.e";
	if (iris_1825i_152(iris_1825i_42, Math.PI / 4)) return "math.pi / 4";
	return null
}

function iris_1825i_153 (iris_1825i_46) {
    let iris_1825i_4 = '"'
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_46.length; iris_1825i_5++) {
		const iris_1825i_67 = iris_1825i_46.charCodeAt(iris_1825i_5)
        if (iris_1825i_67 === 0x22) iris_1825i_4 += '\\"'
    else if (iris_1825i_67 === 0x5c) iris_1825i_4 += "\\\\";
      else if (iris_1825i_67 === 0x0a) iris_1825i_4 += "\\n"
    else if (iris_1825i_67 === 0x0d) iris_1825i_4 += "\\r";
    else if (iris_1825i_67 === 0x09) iris_1825i_4 += "\\t";
		else if (iris_1825i_67 === 0x00) iris_1825i_4 += "\\0";
    else if (iris_1825i_67 < 32) iris_1825i_4 += "\\" + iris_1825i_67;
    else if (iris_1825i_67 > 0x7e && !iris_1825i_145.unicodeStrings) {

			const iris_1825i_12 = iris_1825i_154(iris_1825i_46[iris_1825i_5]);
      for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_12.length; iris_1825i_125++) iris_1825i_4 += "\\" + iris_1825i_12[iris_1825i_125]
    } else iris_1825i_4 += iris_1825i_46[iris_1825i_5]
	}
   return iris_1825i_4 + '"'
}

function iris_1825i_154 (iris_1825i_155) {
  const iris_1825i_156 = iris_1825i_155.codePointAt(0)
    if (iris_1825i_156 < 0x80) return [iris_1825i_156]
   if (iris_1825i_156 < 0x800) return [0xc0 | (iris_1825i_156 >> 6), 0x80 | (iris_1825i_156 & 0x3f)]
	if (iris_1825i_156 < 0x10000) return [0xe0 | (iris_1825i_156 >> 12), 0x80 | ((iris_1825i_156 >> 6) & 0x3f), 0x80 | (iris_1825i_156 & 0x3f)]
   return [0xf0 | (iris_1825i_156 >> 18), 0x80 | ((iris_1825i_156 >> 12) & 0x3f), 0x80 | ((iris_1825i_156 >> 6) & 0x3f), 0x80 | (iris_1825i_156 & 0x3f)]
}

function iris_1825i_157 (iris_1825i_67) {
    switch (iris_1825i_67.kind) {
    case iris_1825i_14.Nil: return "nil";
    case iris_1825i_14.Boolean: return iris_1825i_67.boolean ? 'true' : "false";
		case iris_1825i_14.Number: return iris_1825i_150(iris_1825i_67.number)
    case iris_1825i_14.Integer: return String(iris_1825i_67.integer);
    case iris_1825i_14.String: return iris_1825i_153(iris_1825i_67.str)
    case iris_1825i_14.Vector:
		case iris_1825i_14.VectorD:
      return 'vector.create(' + iris_1825i_150(iris_1825i_67.vec[0]) + ', ' + iris_1825i_150(iris_1825i_67.vec[1]) + ", " + iris_1825i_150(iris_1825i_67.vec[2]) + ")"
      default:
      return "?";
   }
}



const iris_1825i_158 = Object.freeze({
   Leaf:0, Bin:1, Un:2, Index:3, Dot:4, Call:5, MethodCall:6, Table:7, Lambda:8, Vararg:9, IfElse:10,
})

function iris_1825i_159 (iris_1825i_137) {
    return {
    kind: iris_1825i_137, prec:0, rightAssoc:false, multi:false, built:false, parenWrap:false,
      text:'', op:'', args:[], name:'', keys:[], vals:[],
    hdr:'', about:'', srcLine:0, bodyLines:[], ty:null,
  }
}


function iris_1825i_160 (iris_1825i_161, iris_1825i_118) { return { name: iris_1825i_118, tier: iris_1825i_161 } }

function iris_1825i_162 (iris_1825i_163) {
    switch (iris_1825i_163) {
		case 'number': return 'number'
      case 'string': return "string";
		case 'boolean': return "boolean"
		case 'buffer': return 'buffer';
		case 'Vector3': case 'Vector2': case 'vector': return 'vector';
    case 'Color3': return "color";
    case "CFrame": return 'cframe';
      case 'UDim2': return "udim2";
		case 'Instance': case 'Model': case "Part": case 'Frame': return 'object';
      case "table": return "table"
    case 'function': return "function";
		default: return "variable"
	}
}



function iris_1825i_164(iris_1825i_46) {
   const iris_1825i_165 = String(iris_1825i_46).split(/[^A-Za-z0-9]+/).filter((iris_1825i_55) => iris_1825i_55.length > 0)
    if (iris_1825i_165.length === 0) return '';
   let iris_1825i_4 = iris_1825i_165[0]
   for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_165.length; iris_1825i_5++) iris_1825i_4 += iris_1825i_165[iris_1825i_5].charAt(0).toUpperCase() + iris_1825i_165[iris_1825i_5].slice(1)
	return iris_1825i_4
}

function iris_1825i_166 (iris_1825i_123) {
  if (!iris_1825i_123 || iris_1825i_123.kind !== iris_1825i_158.Leaf) return '';
    const iris_1825i_163 = iris_1825i_123.text
   if (iris_1825i_163.length >= 2 && iris_1825i_163[0] === '"' && iris_1825i_163[iris_1825i_163.length - 1] === '"') return iris_1825i_163.slice(1, -1);
  return ""
}

function iris_1825i_167(iris_1825i_168){
    const iris_1825i_123 = iris_1825i_168 && iris_1825i_168.a;
    if (!iris_1825i_123 || !iris_1825i_168.args || iris_1825i_168.args.length === 0) return "";
    const iris_1825i_163 = iris_1825i_176(iris_1825i_123);
    if (iris_1825i_163 === "require") {
        const iris_1825i_169 = iris_1825i_168.args[0];
        const iris_1825i_170 = iris_1825i_169 && iris_1825i_169.args && iris_1825i_169.args[0];
        const iris_1825i_171 = iris_1825i_166(iris_1825i_170) || (iris_1825i_170 && iris_1825i_170._srcStr) || "";
        if (iris_1825i_169 && iris_1825i_169.kind === iris_1825i_158.MethodCall &&
            (iris_1825i_169.name === "WaitForChild" || iris_1825i_169.name === "FindFirstChild"))
            return iris_1825i_164(iris_1825i_171);
    }
    if (iris_1825i_123.kind === iris_1825i_158.Dot && (iris_1825i_123.name === "get" || iris_1825i_123.name === "getModule")) {
        const iris_1825i_170 = iris_1825i_168.args[0];
        const iris_1825i_171 = iris_1825i_166(iris_1825i_170) || (iris_1825i_170 && iris_1825i_170._srcStr) || "";
        return iris_1825i_164(iris_1825i_171);
    }
    return "";
}


function iris_1825i_172 (iris_1825i_123) {
  if (!iris_1825i_123) return null;
  switch (iris_1825i_123.kind) {
    case iris_1825i_158.Leaf: {
      const iris_1825i_163 = iris_1825i_123.text
         if (iris_1825i_163.length > 0 && iris_1825i_163[0] === '"') return iris_1825i_160(1, 'string')
         if (/^-?\d+(\.\d+)?$/.test(iris_1825i_163) || iris_1825i_163 === 'math.pi' || iris_1825i_163.startsWith("math.pi")) return iris_1825i_160(1, 'number');
      if (iris_1825i_163 === "true" || iris_1825i_163 === "false") return iris_1825i_160(1, "boolean")
            if (iris_1825i_163.startsWith("Vector3.")) return iris_1825i_160(iris_1825i_163 === 'Vector3.new' ? 1 : 2, "Vector3")
      if (iris_1825i_163.startsWith("Vector2.")) return iris_1825i_160(iris_1825i_163 === 'Vector2.new' ? 1 : 2, 'Vector2')
         if (iris_1825i_163.startsWith("Color3.")) return iris_1825i_160(iris_1825i_163 === 'Color3.new' ? 1 : 2, "Color3");
      if (iris_1825i_163.startsWith("CFrame.")) return iris_1825i_160(iris_1825i_163 === 'CFrame.new' ? 1 : 2, 'CFrame')
      if (iris_1825i_163.startsWith('UDim2.') && iris_1825i_163 !== "UDim2.fromScale" && iris_1825i_163 !== "UDim2.fromOffset") return iris_1825i_160(1, "UDim2")
         if (iris_1825i_163.startsWith('Instance.new')) return iris_1825i_160(1, 'Instance');
			if (iris_1825i_163.startsWith('Instance.')) return iris_1825i_160(2, 'Instance');
      if (iris_1825i_163.startsWith("math.")) return iris_1825i_160(1, 'number');
			if (iris_1825i_163.startsWith('string.')) return iris_1825i_160(1, 'string')
            if (iris_1825i_163.startsWith('table.')) return iris_1825i_160(1, 'table')
         if (iris_1825i_163.startsWith('buffer.')) return iris_1825i_160(1, 'number')
         if (iris_1825i_163.startsWith("task.")) return iris_1825i_160(1, "number");
      if (iris_1825i_163.startsWith('os.time')) return iris_1825i_160(1, 'number')
         if (iris_1825i_163.startsWith("os.clock")) return iris_1825i_160(1, "number")
			if (iris_1825i_163.startsWith("Enum.")) return iris_1825i_160(1, "Enum")
         return null
        }
    case iris_1825i_158.Un:
         if (iris_1825i_123.op === '-' || iris_1825i_123.op === '#') return iris_1825i_160(1, 'number');
      if (iris_1825i_123.op === 'not') return iris_1825i_160(1, 'boolean')
            return iris_1825i_172(iris_1825i_123.a)
		case iris_1825i_158.Bin:
      if (iris_1825i_123.op === '..') return iris_1825i_160(1, 'string')
      if (iris_1825i_123.op === 'and' || iris_1825i_123.op === 'or') {
        const iris_1825i_173 = iris_1825i_172(iris_1825i_123.a), iris_1825i_54 = iris_1825i_172(iris_1825i_123.b)
				return iris_1825i_173 && iris_1825i_173.name === iris_1825i_54 && iris_1825i_54.name ? iris_1825i_173 : null;
			}
            return iris_1825i_160(1, "number")
		case iris_1825i_158.Call: case iris_1825i_158.MethodCall: {
			const iris_1825i_174 = iris_1825i_123.kind === iris_1825i_158.Call ? iris_1825i_176(iris_1825i_123.a) : (iris_1825i_123.name || '')
      return iris_1825i_178(iris_1825i_174, iris_1825i_123.kind === iris_1825i_158.Call ? iris_1825i_123.a : null)
        }
        case iris_1825i_158.Index: return null
		case iris_1825i_158.Dot: {
            const iris_1825i_47 = iris_1825i_176(iris_1825i_123.a);
			if (iris_1825i_47 === "math") return iris_1825i_160(1, 'number');
            if (iris_1825i_47 === "string") return iris_1825i_160(1, 'string')
      if (iris_1825i_47 === 'table') return iris_1825i_160(1, "table")
      const iris_1825i_175 = iris_1825i_172(iris_1825i_123.a)
            if (iris_1825i_175 && iris_1825i_175.tier === 1) return iris_1825i_175
         return null;
    }
		case iris_1825i_158.Table: return iris_1825i_160(1, 'table')
		case iris_1825i_158.Lambda: return iris_1825i_160(1, 'function');
      default: return null
	}
}

function iris_1825i_176(iris_1825i_123) {
   if (!iris_1825i_123) return "";
	const iris_1825i_177 = iris_1825i_182(iris_1825i_123)
    return iris_1825i_177.length ? iris_1825i_177[0][1] : '';
}

function iris_1825i_178 (iris_1825i_174, iris_1825i_179) {
	const iris_1825i_180 = iris_1825i_174.match(/([A-Za-z]+)\.new$/)
  if (iris_1825i_180) {
    const iris_1825i_181 = iris_1825i_180[1]
    if (iris_1825i_181 === "Instance") return iris_1825i_160(1, "Instance")
      if (/^(Vector3|Vector2|Color3|CFrame|UDim2|Random|Region3|Ray|TweenInfo|NumberRange|NumberSequence|PhysicalProperties|SegmentedColorScale|RotationCurve)?$/.test(iris_1825i_181) ||
      iris_1825i_181.length <= 9 && /^[A-Z]/.test(iris_1825i_181)) return iris_1825i_160(2, iris_1825i_181)
	}
   if (iris_1825i_174 === "Instance.new") return iris_1825i_160(1, 'Instance');
    if (iris_1825i_174 === "Vector3.new") return iris_1825i_160(1, 'Vector3');
  if (iris_1825i_174 === "Color3.new") return iris_1825i_160(1, 'Color3');
	if (iris_1825i_174 === 'Vector2.new') return iris_1825i_160(1, 'Vector2')
   if (iris_1825i_174 === 'CFrame.new') return iris_1825i_160(1, 'CFrame')
    if (iris_1825i_174 === 'WaitForChild' || iris_1825i_174 === "FindFirstChild" ||
		iris_1825i_174 === "FindFirstChildOfClass" || iris_1825i_174 === 'WaitForChildOfClass' ||
    iris_1825i_174 === 'Clone' || iris_1825i_174 === 'GetParent') return iris_1825i_160(2, 'Instance');
	if (iris_1825i_174 === 'GetChildren' || iris_1825i_174 === 'GetDescendants' ||
    iris_1825i_174 === "GetPlayers" || iris_1825i_174 === 'GetTags') return iris_1825i_160(2, '{Instance}');
    if (iris_1825i_174 === "type" || iris_1825i_174 === "typeof") return iris_1825i_160(1, "string");
  if (iris_1825i_174 === "tostring") return iris_1825i_160(1, 'string')
    if (iris_1825i_174 === 'tonumber') return iris_1825i_160(1, "number")
   if (iris_1825i_174 === 'pcall' || iris_1825i_174 === "xpcall") return null;
    if (iris_1825i_179) return iris_1825i_172(iris_1825i_179)
  return null
}


function iris_1825i_182 (iris_1825i_123) {
  if (!iris_1825i_123) return [[0, "nil"]]
   switch (iris_1825i_123.kind) {
		case iris_1825i_158.Leaf:
    case iris_1825i_158.Vararg:
         return [[0, iris_1825i_123.text]]
		case iris_1825i_158.Un:
         return iris_1825i_221(iris_1825i_123)
      case iris_1825i_158.Bin:
			return iris_1825i_216(iris_1825i_123);
        case iris_1825i_158.Index: {
			const iris_1825i_47 = iris_1825i_182(iris_1825i_123.a)
      const iris_1825i_125 = iris_1825i_182(iris_1825i_123.b)
      if (iris_1825i_47.length === 1 && iris_1825i_125.length === 1) return [[0, iris_1825i_47[0][1] + "[" + iris_1825i_125[0][1] + ']']]
      iris_1825i_47[iris_1825i_47.length - 1][1] += '[';
            for (const iris_1825i_173 of iris_1825i_125) iris_1825i_47.push(iris_1825i_173);
         iris_1825i_47[iris_1825i_47.length - 1][1] += ']'
			return iris_1825i_47
        }
    case iris_1825i_158.Dot: {
         const iris_1825i_47 = iris_1825i_182(iris_1825i_123.a)
         for (const iris_1825i_173 of iris_1825i_47) iris_1825i_173[1] += '.' + iris_1825i_123.name
      return iris_1825i_47
    }
    case iris_1825i_158.Call:
			return iris_1825i_223(iris_1825i_123, '(')
      case iris_1825i_158.MethodCall:
			return iris_1825i_223(iris_1825i_123, ':' + iris_1825i_123.name + '(');
      case iris_1825i_158.Table:
			return iris_1825i_201(iris_1825i_123)
		case iris_1825i_158.Lambda:
			return iris_1825i_208(iris_1825i_123);
    case iris_1825i_158.IfElse: {
      const iris_1825i_183 = iris_1825i_182(iris_1825i_123.a);
			const iris_1825i_184 = iris_1825i_182(iris_1825i_123.b)
            const iris_1825i_185 = iris_1825i_182(iris_1825i_123.c)
			const iris_1825i_186 = iris_1825i_183.length === 0 ? "false" : iris_1825i_183[0][1]
      const iris_1825i_187 = iris_1825i_184.length === 0 ? 'nil' : iris_1825i_184[0][1]
            const iris_1825i_188 = iris_1825i_185.length === 0 ? 'nil' : iris_1825i_185[0][1]
         return [[0, 'if ' + iris_1825i_186 + " then " + iris_1825i_187 + ' else ' + iris_1825i_188]]
		}
		default:
			return [[0, 'nil']]
	}
}

function iris_1825i_189(iris_1825i_125) {
    if (!iris_1825i_125 || iris_1825i_125.kind !== iris_1825i_158.Leaf) return '';
  let iris_1825i_163 = iris_1825i_125.text;
  if (iris_1825i_163.length >= 2 && iris_1825i_163[0] === '"' && iris_1825i_163[iris_1825i_163.length - 1] === '"') iris_1825i_163 = iris_1825i_163.slice(1, -1)
    return iris_1825i_148(iris_1825i_163) ? iris_1825i_163 : '';
}

function iris_1825i_190(iris_1825i_125) {
	if (!iris_1825i_125) return ""
	const iris_1825i_118 = iris_1825i_189(iris_1825i_125);
    if (iris_1825i_118.length > 0) return iris_1825i_118 + " = ";
  const iris_1825i_191 = iris_1825i_182(iris_1825i_125);
  if (iris_1825i_191.length > 0) return '[' + iris_1825i_191[0][1] + '] = ';
	return '';
}

function iris_1825i_192(iris_1825i_123) {
  if (!iris_1825i_123 || iris_1825i_123.kind !== iris_1825i_158.Table) return false;
  if (iris_1825i_123.vals.length === 0) return true
	if (iris_1825i_123.vals.length > 3) return false
    for (const iris_1825i_193 of iris_1825i_123.vals) {
    if (!iris_1825i_193 || iris_1825i_193.kind === iris_1825i_158.Table || iris_1825i_193.kind === iris_1825i_158.Lambda) return false
	}
	return true;
}

function iris_1825i_194(iris_1825i_123) {
    if (!iris_1825i_123 || iris_1825i_123.vals.length === 0) return [[0, '{}']]
  let iris_1825i_195 = "{"
  let iris_1825i_196 = false;
	for (const iris_1825i_125 of iris_1825i_123.keys) if (iris_1825i_125) iris_1825i_196 = true;
    if (!iris_1825i_196) {
      iris_1825i_195 += " ";
		for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_123.vals.length; iris_1825i_5++) {
			if (iris_1825i_5) iris_1825i_195 += ', '
      const iris_1825i_197 = iris_1825i_182(iris_1825i_123.vals[iris_1825i_5])
      if (iris_1825i_197.length === 0) return []
      iris_1825i_195 += iris_1825i_197[0][1]
    }
		iris_1825i_195 += " }";
      return [[0, iris_1825i_195]]
	}
   for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_123.vals.length; iris_1825i_5++) {
        if (iris_1825i_5) iris_1825i_195 += ', '; else iris_1825i_195 += ' '
    const iris_1825i_198 = iris_1825i_190(iris_1825i_123.keys[iris_1825i_5]);
        const iris_1825i_197 = iris_1825i_182(iris_1825i_123.vals[iris_1825i_5]);
		if (iris_1825i_197.length === 0) return []
    iris_1825i_195 += iris_1825i_198 + iris_1825i_197[0][1]
    }
  iris_1825i_195 += ' }';
	return [[0, iris_1825i_195]]
}

// render-time guard so recursive tables print nil instead of looping
const iris_1825i_199 = [];
function iris_1825i_200 (iris_1825i_123) {
    return iris_1825i_199.indexOf(iris_1825i_123) >= 0 || iris_1825i_199.length >= 256 ? [[0, 'nil']] : null
}
function iris_1825i_201 (iris_1825i_123) {
    if (!iris_1825i_123 || iris_1825i_123.vals.length === 0) return [[0, '{}']]
    const iris_1825i_202 = iris_1825i_200(iris_1825i_123)
    if (iris_1825i_202) return iris_1825i_202
    iris_1825i_199.push(iris_1825i_123)
    try {
        if (iris_1825i_192(iris_1825i_123)) {
            const iris_1825i_203 = iris_1825i_194(iris_1825i_123)
            if (iris_1825i_203.length > 0 && iris_1825i_203[0][1].length < 60) return iris_1825i_203;
        }
        const iris_1825i_4 = []
        iris_1825i_4.push([0, "{"])
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_123.vals.length; iris_1825i_5++) {
            const iris_1825i_204 = iris_1825i_190(iris_1825i_123.keys[iris_1825i_5])
            const iris_1825i_205 = iris_1825i_182(iris_1825i_123.vals[iris_1825i_5])
            if (iris_1825i_205.length === 0) continue
            const iris_1825i_206 = (iris_1825i_5 + 1 < iris_1825i_123.vals.length)
            if (iris_1825i_205.length === 1) {
                let iris_1825i_130 = iris_1825i_204 + iris_1825i_205[0][1]
                if (iris_1825i_206) iris_1825i_130 += ','
                iris_1825i_4.push([1, iris_1825i_130])
            } else {
                iris_1825i_4.push([1, iris_1825i_204 + iris_1825i_205[0][1]])
                for (let iris_1825i_69 = 1; iris_1825i_69 + 1 < iris_1825i_205.length; iris_1825i_69++) iris_1825i_4.push([1 + iris_1825i_205[iris_1825i_69][0], iris_1825i_205[iris_1825i_69][1]])
                let iris_1825i_207 = iris_1825i_205[iris_1825i_205.length - 1][1]
                if (iris_1825i_206) iris_1825i_207 += ','
			iris_1825i_4.push([1 + iris_1825i_205[iris_1825i_205.length - 1][0], iris_1825i_207]);
		}
    }
        iris_1825i_4.push([0, "}"])
        return iris_1825i_4
    } finally {
        iris_1825i_199.pop()
    }
}


function iris_1825i_208 (iris_1825i_209) {
  const iris_1825i_4 = []
	if (iris_1825i_145.upvalueComments && iris_1825i_209.about) iris_1825i_4.push([0, iris_1825i_209.about])
  let iris_1825i_210 = iris_1825i_209.hdr;
    if (iris_1825i_145.lineComments && iris_1825i_209.srcLine) iris_1825i_210 += ' -- line ' + iris_1825i_209.srcLine;
  iris_1825i_4.push([0, iris_1825i_210])
	for (const iris_1825i_211 of iris_1825i_209.bodyLines) iris_1825i_4.push([iris_1825i_211[0] + 1, iris_1825i_211[1]]);
  iris_1825i_4.push([0, 'end']);
  return iris_1825i_4;
}

function iris_1825i_212(iris_1825i_23, iris_1825i_213, iris_1825i_47) {
    if (iris_1825i_23.length === 0) return iris_1825i_47;
  if (iris_1825i_47.length === 0) return iris_1825i_23;
   if (iris_1825i_23.length === 1 && iris_1825i_47.length === 1) return [[0, iris_1825i_23[0][1] + iris_1825i_213 + iris_1825i_47[0][1]]]
	if (iris_1825i_47.length === 1) {
    iris_1825i_23[iris_1825i_23.length - 1][1] += iris_1825i_213 + iris_1825i_47[0][1]
    return iris_1825i_23
	}
	iris_1825i_23[iris_1825i_23.length - 1][1] += iris_1825i_213 + iris_1825i_47[0][1]
  for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_47.length; iris_1825i_5++) iris_1825i_23.push(iris_1825i_47[iris_1825i_5]);
	return iris_1825i_23;
}

function iris_1825i_214(iris_1825i_177, iris_1825i_215) {
    if (iris_1825i_177.length === 0 || !iris_1825i_215) return
  iris_1825i_177[0][1] = '(' + iris_1825i_177[0][1]
  iris_1825i_177[iris_1825i_177.length - 1][1] += ')'
}

function iris_1825i_216 (iris_1825i_123) {
    const iris_1825i_217 = iris_1825i_123.prec;
	const iris_1825i_218 = iris_1825i_123.rightAssoc;
	let iris_1825i_219 = false;
	let iris_1825i_220 = false;
  if (iris_1825i_123.a && iris_1825i_123.a.kind === iris_1825i_158.Bin &&
    (iris_1825i_123.a.prec < iris_1825i_217 || (iris_1825i_123.a.prec === iris_1825i_217 && iris_1825i_218))) iris_1825i_219 = true;
  if (iris_1825i_123.b && iris_1825i_123.b.kind === iris_1825i_158.Bin &&
      (iris_1825i_123.b.prec < iris_1825i_217 || (iris_1825i_123.b.prec === iris_1825i_217 && !iris_1825i_218))) iris_1825i_220 = true;
   if (iris_1825i_123.b && iris_1825i_123.b.kind === iris_1825i_158.Un && iris_1825i_123.op !== "and" && iris_1825i_123.op !== "or") iris_1825i_220 = true;
    if (iris_1825i_123.a && iris_1825i_123.a.kind === iris_1825i_158.Un && iris_1825i_123.op === '^') iris_1825i_219 = true;
   if (iris_1825i_123.a && iris_1825i_123.a.parenWrap) iris_1825i_219 = true;
  if (iris_1825i_123.b && iris_1825i_123.b.parenWrap) iris_1825i_220 = true
   const iris_1825i_23 = iris_1825i_182(iris_1825i_123.a);
    const iris_1825i_47 = iris_1825i_182(iris_1825i_123.b);
	iris_1825i_214(iris_1825i_23, iris_1825i_219);
    iris_1825i_214(iris_1825i_47, iris_1825i_220);
	return iris_1825i_212(iris_1825i_23, ' ' + iris_1825i_123.op + ' ', iris_1825i_47)
}

function iris_1825i_221 (iris_1825i_123) {
  const iris_1825i_67 = iris_1825i_182(iris_1825i_123.a)
	const iris_1825i_213 = (iris_1825i_123.op === "not") ? ' ' : ''
  const iris_1825i_222 = !!iris_1825i_123.a && (iris_1825i_123.a.kind === iris_1825i_158.Bin || iris_1825i_123.a.parenWrap);
  if (iris_1825i_222) {
      if (iris_1825i_67.length === 1) return [[0, iris_1825i_123.op + iris_1825i_213 + '(' + iris_1825i_67[0][1] + ")"]]
    iris_1825i_67[0][1] = iris_1825i_123.op + iris_1825i_213 + '(' + iris_1825i_67[0][1]
    iris_1825i_67[iris_1825i_67.length - 1][1] += ")";
		return iris_1825i_67;
	}
	iris_1825i_67[0][1] = iris_1825i_123.op + iris_1825i_213 + iris_1825i_67[0][1]
	return iris_1825i_67
}


function iris_1825i_223(iris_1825i_123, iris_1825i_224) {
	const iris_1825i_225 = []
    for (const iris_1825i_173 of iris_1825i_182(iris_1825i_123.a)) iris_1825i_225.push([iris_1825i_173[0], iris_1825i_173[1] + iris_1825i_224])
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_123.args.length; iris_1825i_5++) {
      const iris_1825i_23 = iris_1825i_182(iris_1825i_123.args[iris_1825i_5])
		if (iris_1825i_23.length === 0) continue;
      const iris_1825i_207 = iris_1825i_225[iris_1825i_225.length - 1]
		if (iris_1825i_5) iris_1825i_207[1] += ", ";
    iris_1825i_207[1] += iris_1825i_23[0][1]
    for (let iris_1825i_69 = 1; iris_1825i_69 < iris_1825i_23.length; iris_1825i_69++) iris_1825i_225.push(iris_1825i_23[iris_1825i_69])
	}
	if (iris_1825i_225.length > 0) iris_1825i_225[iris_1825i_225.length - 1][1] += ')'
   return iris_1825i_225;
}

function iris_1825i_226 (iris_1825i_123) {
  const iris_1825i_177 = iris_1825i_182(iris_1825i_123);
    return iris_1825i_177.length === 0 ? 'nil' : iris_1825i_177[0][1]
}

function iris_1825i_227(iris_1825i_165) {
  if (iris_1825i_165.length < 3) return null;
    if (iris_1825i_165.length % 2 !== 1) return null;
    const iris_1825i_228 = []
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_165.length; iris_1825i_5 += 2) {
        const iris_1825i_55 = iris_1825i_165[iris_1825i_5]
      if (!iris_1825i_55 || iris_1825i_55.kind !== iris_1825i_158.Leaf || !(iris_1825i_55.text.length >= 2 && iris_1825i_55.text[0] === '"' && iris_1825i_55.text[iris_1825i_55.text.length - 1] === '"'))
      return null;
      iris_1825i_228.push(iris_1825i_55.text.slice(1, -1))
   }
    for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_228.length; iris_1825i_5++) {
		const iris_1825i_229 = iris_1825i_228[iris_1825i_5]
      if (iris_1825i_5 === 0) { if (!iris_1825i_229.endsWith('{')) return null; }
    else if (iris_1825i_5 === iris_1825i_228.length - 1) { if (!iris_1825i_229.startsWith("}")) return null; }
		else if (!iris_1825i_229.startsWith("}") || !iris_1825i_229.endsWith('{')) return null
	}
  let iris_1825i_4 = '';
	for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_165.length; iris_1825i_125 += 2) {
		const iris_1825i_229 = iris_1825i_228[iris_1825i_125 / 2]
        const iris_1825i_207 = (iris_1825i_125 + 2 >= iris_1825i_165.length)
      if (iris_1825i_125 === 0) iris_1825i_4 += iris_1825i_229.slice(0, -1);
    else if (iris_1825i_207) iris_1825i_4 += iris_1825i_229.slice(1)
		else iris_1825i_4 += iris_1825i_229.slice(1, -1)
        if (!iris_1825i_207) {
      const iris_1825i_168 = iris_1825i_176(iris_1825i_165[iris_1825i_125 + 1])
            if (iris_1825i_168.length === 0 || iris_1825i_168 === "nil") return null;
			iris_1825i_4 += "{" + iris_1825i_168 + '}';
		}
  }
  return iris_1825i_4
}


let iris_1825i_230 = 0;

const iris_1825i_231 = 0, iris_1825i_232 = 1, iris_1825i_233 = 2, iris_1825i_234 = 3, iris_1825i_235 = 4;

class iris_1825i_236 {
	constructor() { this.indent = 0; this.lines = [] }
  push(iris_1825i_391, iris_1825i_363) { this.lines.push({ level: iris_1825i_391, text: iris_1825i_363 }) }
  emit(iris_1825i_363) { this.lines.push({ level: this.indent, text: iris_1825i_363 }) }
}

class iris_1825i_237 {
constructor (iris_1825i_127, iris_1825i_58, iris_1825i_393, iris_1825i_394) {
    this.opt = iris_1825i_145
        this.program = iris_1825i_127
		this.proto = iris_1825i_58;
		this.upvals = iris_1825i_393;
    this.isMain = iris_1825i_394;
      this.n = iris_1825i_58.code.length;
		this.R = Math.max(iris_1825i_58.maxstack, iris_1825i_58.numparams + (iris_1825i_58.is_vararg !== 0 ? 8 : 0) + 8);

      this.reg = new Array(this.R).fill(null);
    this.regName = new Array(this.R).fill('');
        this.regDeclared = new Array(this.R).fill(false)
    this.regOrigin = new Array(this.R).fill(null);
    this.regTy = new Array(this.R).fill(null);
        this.methodInfo = new Array(this.R).fill(null)
		this.captured = new Array(this.R).fill(false);
        this.strConstOf = new Map();

      this.maxLocals = iris_1825i_58.numparams;
    this.nextV = 1
		this.tableCount = 0
		this.currentPc = -1;
		this.inLoop = 0
      this.lastRetTy = null
      this.usedNames = new Set()
    this.loops = new Map();
    this.paramUsed = new Array(iris_1825i_58.numparams).fill(false);
      this.paramTy = new Array(iris_1825i_58.numparams).fill(null);

      this.live_pass();
      this.make_loops();

        for (const iris_1825i_100 of iris_1825i_58.locvars)
         if (iris_1825i_100.name.length > 0 && iris_1825i_100.name[0] !== "(") this.usedNames.add(iris_1825i_100.name);

      for (let iris_1825i_54 = 0; iris_1825i_54 < iris_1825i_58.numparams; iris_1825i_54++) {
      let iris_1825i_238 = this.locv_at(iris_1825i_54, 0);
      if (iris_1825i_238.length === 0) iris_1825i_238 = 'argument' + (iris_1825i_54 + 1);
      this.regName[iris_1825i_54] = iris_1825i_238;
			this.reg[iris_1825i_54] = this.leaf(iris_1825i_238)
      this.regDeclared[iris_1825i_54] = true;
			this.usedNames.add(iris_1825i_238);
      }

        this.scan_params();
		this.scan_captures()
	}
scan_captures () {
    for (let iris_1825i_5 = 0; iris_1825i_5 < this.n; iris_1825i_5++) {
      const iris_1825i_30 = iris_1825i_21(this.proto.code[iris_1825i_5]);
			if (iris_1825i_30 === iris_1825i_13.NEWCLOSURE) {
				const iris_1825i_135 = iris_1825i_19(this.proto.code[iris_1825i_5])
        if (iris_1825i_135 >= 0 && iris_1825i_135 < this.proto.children.length) {
          const iris_1825i_67 = this.program.protos[this.proto.children[iris_1825i_135]]
          for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_67.nups && iris_1825i_5 + 1 + iris_1825i_129 < this.n; iris_1825i_129++) {
						const iris_1825i_136 = this.proto.code[iris_1825i_5 + 1 + iris_1825i_129]
            if (iris_1825i_16(iris_1825i_136) !== 2) {
                            const iris_1825i_239 = iris_1825i_17(iris_1825i_136);
              if (iris_1825i_239 < this.R) this.captured[iris_1825i_239] = true;
						}
					}
				}
			} else if (iris_1825i_30 === iris_1825i_13.DUPCLOSURE) {
        const iris_1825i_240 = this.const_at(iris_1825i_19(this.proto.code[iris_1825i_5]))
				if (iris_1825i_240 && iris_1825i_240.kind === iris_1825i_14.Closure && iris_1825i_240.closureProto >= 0 &&
					iris_1825i_240.closureProto < this.program.protos.length) {
                    const iris_1825i_67 = this.program.protos[iris_1825i_240.closureProto]
               for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_67.nups && iris_1825i_5 + 1 + iris_1825i_129 < this.n; iris_1825i_129++) {
            const iris_1825i_136 = this.proto.code[iris_1825i_5 + 1 + iris_1825i_129]
						if (iris_1825i_16(iris_1825i_136) !== 2) {
							const iris_1825i_239 = iris_1825i_17(iris_1825i_136)
              if (iris_1825i_239 < this.R) this.captured[iris_1825i_239] = true
						}
          }
        }
			}
    }
    }
scan_params() {
    const iris_1825i_35 = this.proto.code
      const iris_1825i_241 = this.proto.numparams;
      for (let iris_1825i_5 = 0; iris_1825i_5 < this.n; iris_1825i_5++) {
            const iris_1825i_37 = iris_1825i_35[iris_1825i_5]
         const iris_1825i_30 = iris_1825i_21(iris_1825i_37)
      const iris_1825i_242 = iris_1825i_16(iris_1825i_37), iris_1825i_243 = iris_1825i_17(iris_1825i_37), iris_1825i_244 = iris_1825i_18(iris_1825i_37)
      const iris_1825i_245 = (iris_1825i_54) => { if (iris_1825i_54 < iris_1825i_241) { this.paramUsed[iris_1825i_54] = true; if (!this.paramTy[iris_1825i_54]) this.paramTy[iris_1825i_54] = iris_1825i_160(1, 'number') } }
			const iris_1825i_246 = (iris_1825i_54) => { if (iris_1825i_54 < iris_1825i_241) { this.paramUsed[iris_1825i_54] = true; if (!this.paramTy[iris_1825i_54]) this.paramTy[iris_1825i_54] = iris_1825i_160(1, 'string') } }
            const iris_1825i_247 = (iris_1825i_54) => { if (iris_1825i_54 < iris_1825i_241) { this.paramUsed[iris_1825i_54] = true; if (!this.paramTy[iris_1825i_54]) this.paramTy[iris_1825i_54] = iris_1825i_160(1, "table") } }
      const iris_1825i_248 = (iris_1825i_54) => { if (iris_1825i_54 < iris_1825i_241) { this.paramUsed[iris_1825i_54] = true; if (!this.paramTy[iris_1825i_54]) this.paramTy[iris_1825i_54] = iris_1825i_160(2, "Instance") } }
            switch (iris_1825i_30) {
				case iris_1825i_13.ADD: case iris_1825i_13.SUB: case iris_1825i_13.MUL: case iris_1825i_13.DIV: case iris_1825i_13.MOD: case iris_1825i_13.POW: case iris_1825i_13.IDIV:
          iris_1825i_245(iris_1825i_243); iris_1825i_245(iris_1825i_244); break;
            case iris_1825i_13.ADDK: case iris_1825i_13.SUBK: case iris_1825i_13.MULK: case iris_1825i_13.DIVK: case iris_1825i_13.MODK: case iris_1825i_13.POWK: case iris_1825i_13.IDIVK:
          iris_1825i_245(iris_1825i_243); break
				case iris_1825i_13.SUBRK: case iris_1825i_13.DIVRK: iris_1825i_245(iris_1825i_244); break;
            case iris_1825i_13.CONCAT:
					for (let iris_1825i_54 = iris_1825i_243; iris_1825i_54 <= iris_1825i_244; iris_1825i_54++) iris_1825i_246(iris_1825i_54)
          break
				case iris_1825i_13.MINUS: case iris_1825i_13.LENGTH: case iris_1825i_13.NOT:
					iris_1825i_245(iris_1825i_243); break;
        case iris_1825i_13.GETTABLEKS: case iris_1825i_13.SETTABLEKS: case iris_1825i_13.GETUDATAKS: case iris_1825i_13.SETUDATAKS:
                    iris_1825i_248(iris_1825i_243); break;
        case iris_1825i_13.GETTABLE: case iris_1825i_13.SETTABLE: case iris_1825i_13.GETTABLEN: case iris_1825i_13.SETTABLEN:
					iris_1825i_247(iris_1825i_243); break
        case iris_1825i_13.NAMECALL: case iris_1825i_13.NAMECALLUDATA:
          iris_1825i_248(iris_1825i_243); break;
				case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT:
               if (iris_1825i_242 < iris_1825i_241) this.paramUsed[iris_1825i_242] = true;
          break
				case iris_1825i_13.JUMPIFEQ: case iris_1825i_13.JUMPIFLE: case iris_1825i_13.JUMPIFLT:
            case iris_1825i_13.JUMPIFNOTEQ: case iris_1825i_13.JUMPIFNOTLE: case iris_1825i_13.JUMPIFNOTLT:
          iris_1825i_245(iris_1825i_242)
					if (iris_1825i_5 + 1 < this.n) iris_1825i_245(iris_1825i_22(iris_1825i_35[iris_1825i_5 + 1]))
                    break;
                case iris_1825i_13.JUMPXEQKB: case iris_1825i_13.JUMPXEQKNIL:
               if (iris_1825i_242 < iris_1825i_241) this.paramUsed[iris_1825i_242] = true;
          break;
        case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS:
               if (iris_1825i_242 < iris_1825i_241) this.paramUsed[iris_1825i_242] = true
               break;
        default: break
            }
    }
  }
const_at (iris_1825i_119) {
		if (iris_1825i_119 < 0 || iris_1825i_119 >= this.proto.k.length) return null;
    return this.proto.k[iris_1825i_119]
  }
const_from (iris_1825i_119) {
		const iris_1825i_67 = this.const_at(iris_1825i_119);
    return iris_1825i_67 ? iris_1825i_157(iris_1825i_67) : "??";
  }
import_path (iris_1825i_72) {
      // top 2 bits = path length, then three 10-bit string ids
const iris_1825i_82 = iris_1825i_72 >>> 30
    const iris_1825i_149 = (iris_1825i_72 >>> 20) & 1023
      const iris_1825i_7 = (iris_1825i_72 >>> 10) & 1023;
        const iris_1825i_8 = iris_1825i_72 & 1023
		const iris_1825i_118 = (iris_1825i_249) => {
			const iris_1825i_67 = this.const_at(iris_1825i_249)
      return (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) ? iris_1825i_67.str : "?";
    }
      let iris_1825i_55 = iris_1825i_118(iris_1825i_149)
    if (iris_1825i_82 >= 2) iris_1825i_55 += '.' + iris_1825i_118(iris_1825i_7);
        if (iris_1825i_82 >= 3) iris_1825i_55 += '.' + iris_1825i_118(iris_1825i_8);
    return iris_1825i_55
  }
locv_at (iris_1825i_543, iris_1825i_477, iris_1825i_544) {
    for (const iris_1825i_100 of this.proto.locvars) {
            if (iris_1825i_100.reg !== iris_1825i_543) continue;
			if (iris_1825i_100.name.length > 0 && iris_1825i_100.name[0] === '(') continue;
			if (iris_1825i_477 >= iris_1825i_100.startpc && iris_1825i_477 < iris_1825i_100.endpc) {
        if (iris_1825i_544 && iris_1825i_100.startpc === iris_1825i_477) iris_1825i_544.v = true
				return iris_1825i_100.name
      }
    }
		return ""
	}
locv_name(iris_1825i_543, iris_1825i_477) {
    for (const iris_1825i_100 of this.proto.locvars) {
			if (iris_1825i_100.reg === iris_1825i_543 && iris_1825i_100.name.length > 0 && iris_1825i_100.name[0] !== "(") {
                if (iris_1825i_477 >= iris_1825i_100.startpc && iris_1825i_477 < iris_1825i_100.endpc) return iris_1825i_100.name;
         }
        }
    return '';
  }
fresh_name (iris_1825i_204, iris_1825i_545) {
      const iris_1825i_250 = this.opt.generatedNames !== 'readable';
      for (;;) {
			const iris_1825i_251 = this.nextV++
      let iris_1825i_252;
      if (iris_1825i_250 || (iris_1825i_204 !== undefined && iris_1825i_204 !== "v")) {
        iris_1825i_252 = iris_1825i_204 + iris_1825i_251
} else {
			const iris_1825i_179 = iris_1825i_545 ? iris_1825i_162(iris_1825i_545) : "variable"
            iris_1825i_252 = iris_1825i_179 + iris_1825i_251
        }
      if (this.usedNames.add(iris_1825i_252)) return iris_1825i_252;
    }
	}
fresh_table_name () {
		for (;;) {
			const iris_1825i_252 = "table" + (this.tableCount + 1);
            this.tableCount++
			if (this.usedNames.add(iris_1825i_252)) return iris_1825i_252;
    }
    }
name_reg (iris_1825i_54, iris_1825i_118) {
    this.regName[iris_1825i_54] = iris_1825i_118
		this.reg[iris_1825i_54] = this.leaf(iris_1825i_118)
    }
nuke_reg (iris_1825i_54) {
        if (iris_1825i_54 < 0 || iris_1825i_54 >= this.R) return
        this.regOrigin[iris_1825i_54] = null
    this.reg[iris_1825i_54] = null
      this.regName[iris_1825i_54] = "";
		this.regDeclared[iris_1825i_54] = false
    this.regTy[iris_1825i_54] = null;
    this.methodInfo[iris_1825i_54] = null
   }
up_name(iris_1825i_546) {
		if (iris_1825i_546 >= 0 && iris_1825i_546 < this.upvals.length && this.upvals[iris_1825i_546].name.length > 0) return this.upvals[iris_1825i_546].name
    if (iris_1825i_546 >= 0 && iris_1825i_546 < this.proto.upnames.length && this.proto.upnames[iris_1825i_546].length > 0 &&
			this.proto.upnames[iris_1825i_546][0] !== "(") return this.proto.upnames[iris_1825i_546]
		return "u" + iris_1825i_546;
	}
cap_name (iris_1825i_4, iris_1825i_477, iris_1825i_239) {
		if (iris_1825i_239 < this.proto.numparams)
      return this.regName[iris_1825i_239].length === 0 ? ("argument" + (iris_1825i_239 + 1)) : this.regName[iris_1825i_239]
    const iris_1825i_238 = this.locv_name(iris_1825i_239, iris_1825i_477);
      if (iris_1825i_238.length > 0) return iris_1825i_238;
		if (this.regName[iris_1825i_239].length > 0) return this.regName[iris_1825i_239]
    this.force_local(iris_1825i_4, iris_1825i_239);
    return this.regName[iris_1825i_239]
    }

  leaf(iris_1825i_46) { const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Leaf); iris_1825i_123.text = iris_1825i_46; iris_1825i_123.ty = iris_1825i_172(iris_1825i_123); return iris_1825i_123 }
bin(iris_1825i_30, iris_1825i_23, iris_1825i_47, iris_1825i_384, iris_1825i_218) {
      const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Bin);
		iris_1825i_123.op = iris_1825i_30; iris_1825i_123.a = iris_1825i_23; iris_1825i_123.b = iris_1825i_47; iris_1825i_123.prec = iris_1825i_384; iris_1825i_123.rightAssoc = !!iris_1825i_218; iris_1825i_123.ty = iris_1825i_172(iris_1825i_123);
		return iris_1825i_123;
  }
un(iris_1825i_30, iris_1825i_23) {
      const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Un);
		iris_1825i_123.op = iris_1825i_30; iris_1825i_123.a = iris_1825i_23; iris_1825i_123.prec = 8; iris_1825i_123.ty = iris_1825i_172(iris_1825i_123)
    return iris_1825i_123;
	}
idx (iris_1825i_179, iris_1825i_51) {
    const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Index);
    iris_1825i_123.a = iris_1825i_179; iris_1825i_123.b = iris_1825i_51; iris_1825i_123.prec = 9; iris_1825i_123.ty = iris_1825i_172(iris_1825i_123);
		return iris_1825i_123;
  }
dot (iris_1825i_179, iris_1825i_118) {
		const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Dot)
    iris_1825i_123.a = iris_1825i_179; iris_1825i_123.name = iris_1825i_118; iris_1825i_123.prec = 9; iris_1825i_123.ty = iris_1825i_172(iris_1825i_123);
    return iris_1825i_123;
    }
call(iris_1825i_322, iris_1825i_317) {
    const iris_1825i_123 = iris_1825i_159(iris_1825i_158.Call)
        iris_1825i_123.a = iris_1825i_322; iris_1825i_123.args = iris_1825i_317; iris_1825i_123.prec = 9; iris_1825i_123.ty = iris_1825i_178(iris_1825i_322 ? iris_1825i_176(iris_1825i_322) : '', iris_1825i_322);
      return iris_1825i_123;
	}
method_call(iris_1825i_179, iris_1825i_118, iris_1825i_317) {
      const iris_1825i_123 = iris_1825i_159(iris_1825i_158.MethodCall)
    iris_1825i_123.a = iris_1825i_179; iris_1825i_123.name = iris_1825i_118; iris_1825i_123.args = iris_1825i_317; iris_1825i_123.prec = 9; iris_1825i_123.ty = iris_1825i_178(iris_1825i_118, iris_1825i_179)
    return iris_1825i_123
  }
if_else (iris_1825i_287, iris_1825i_298, iris_1825i_297) {
    const iris_1825i_123 = iris_1825i_159(iris_1825i_158.IfElse)
		iris_1825i_123.a = iris_1825i_287; iris_1825i_123.b = iris_1825i_298; iris_1825i_123.c = iris_1825i_297; iris_1825i_123.prec = 0; iris_1825i_123.ty = iris_1825i_172(iris_1825i_298) || iris_1825i_172(iris_1825i_297);
        return iris_1825i_123
	}
read_reg (iris_1825i_54) {
        if (iris_1825i_54 >= this.R) return this.leaf("?")
		if (this.reg[iris_1825i_54]) return this.reg[iris_1825i_54]
      if (this.regName[iris_1825i_54].length > 0) return this.leaf(this.regName[iris_1825i_54])
        if (this.regOrigin[iris_1825i_54]) return this.regOrigin[iris_1825i_54]
    if (iris_1825i_54 < this.proto.numparams)
         return this.leaf(this.regName[iris_1825i_54].length === 0 ? ('argument' + (iris_1825i_54 + 1)) : this.regName[iris_1825i_54]);
		if (this.currentPc >= 0) {
			const iris_1825i_238 = this.locv_name(iris_1825i_54, this.currentPc)
      if (iris_1825i_238.length > 0) return this.leaf(iris_1825i_238)
		}
    return this.leaf("nil");
  }
reg_uses (iris_1825i_477, iris_1825i_37, iris_1825i_30, iris_1825i_262, iris_1825i_263) {
    const iris_1825i_253 = (iris_1825i_54) => { if (iris_1825i_54 >= 0 && iris_1825i_54 < this.R) iris_1825i_263.push(iris_1825i_54) }
        const iris_1825i_254 = (iris_1825i_54) => { if (iris_1825i_54 >= 0 && iris_1825i_54 < this.R) iris_1825i_262.push(iris_1825i_54) }

        switch (iris_1825i_30) {
            case iris_1825i_13.MOVE: iris_1825i_254(iris_1825i_16(iris_1825i_37)); iris_1825i_253(iris_1825i_17(iris_1825i_37)); break
         case iris_1825i_13.LOADNIL: {
				const iris_1825i_47 = iris_1825i_17(iris_1825i_37);
                for (let iris_1825i_54 = iris_1825i_16(iris_1825i_37); iris_1825i_54 <= iris_1825i_16(iris_1825i_37) + iris_1825i_47; iris_1825i_54++) iris_1825i_254(iris_1825i_54)
        break
      }
      case iris_1825i_13.LOADB: case iris_1825i_13.LOADN: case iris_1825i_13.LOADK: case iris_1825i_13.LOADKX:
			case iris_1825i_13.GETGLOBAL: case iris_1825i_13.GETUPVAL: case iris_1825i_13.GETIMPORT: case iris_1825i_13.GETTABLE:
         case iris_1825i_13.GETTABLEKS: case iris_1825i_13.GETTABLEN: case iris_1825i_13.GETUDATAKS: case iris_1825i_13.NEWTABLE:
			case iris_1825i_13.DUPTABLE: case iris_1825i_13.NEWCLOSURE: case iris_1825i_13.DUPCLOSURE: case iris_1825i_13.NOT:
			case iris_1825i_13.MINUS: case iris_1825i_13.LENGTH: case iris_1825i_13.GETVARARGS:
        iris_1825i_254(iris_1825i_16(iris_1825i_37)); break;
      default: break
		}

        switch (iris_1825i_30) {
      case iris_1825i_13.GETTABLE: case iris_1825i_13.SETTABLE:
                iris_1825i_253(iris_1825i_17(iris_1825i_37)); iris_1825i_253(iris_1825i_18(iris_1825i_37)); break
            case iris_1825i_13.GETTABLEKS: case iris_1825i_13.SETTABLEKS: case iris_1825i_13.GETUDATAKS: case iris_1825i_13.SETUDATAKS:
			case iris_1825i_13.GETTABLEN: case iris_1825i_13.SETTABLEN:
				iris_1825i_253(iris_1825i_17(iris_1825i_37)); break;
            case iris_1825i_13.SETGLOBAL: case iris_1825i_13.SETUPVAL:
            iris_1825i_253(iris_1825i_16(iris_1825i_37)); break
      case iris_1825i_13.NAMECALL: case iris_1825i_13.NAMECALLUDATA:
				iris_1825i_253(iris_1825i_17(iris_1825i_37)); break;
      case iris_1825i_13.CALL: case iris_1825i_13.CALLFB: {
				const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
        const iris_1825i_255 = iris_1825i_17(iris_1825i_37);
                const iris_1825i_256 = iris_1825i_18(iris_1825i_37)
        const iris_1825i_257 = (iris_1825i_255 === 0) ? -1 : iris_1825i_255 - 1
				iris_1825i_253(iris_1825i_242);
                if (iris_1825i_257 > 0) for (let iris_1825i_5 = 1; iris_1825i_5 <= iris_1825i_257; iris_1825i_5++) iris_1825i_253(iris_1825i_242 + iris_1825i_5);
                const iris_1825i_258 = (iris_1825i_256 === 0) ? -1 : iris_1825i_256 - 1
        if (iris_1825i_258 > 0) for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_258; iris_1825i_5++) iris_1825i_254(iris_1825i_242 + iris_1825i_5);
                break
      }
            case iris_1825i_13.RETURN: {
				const iris_1825i_47 = iris_1825i_17(iris_1825i_37)
        if (iris_1825i_47 >= 2) {
          for (let iris_1825i_54 = iris_1825i_16(iris_1825i_37); iris_1825i_54 < iris_1825i_16(iris_1825i_37) + iris_1825i_47 - 1; iris_1825i_54++) iris_1825i_253(iris_1825i_54)
            } else if (iris_1825i_47 === 0) {
          iris_1825i_253(iris_1825i_16(iris_1825i_37));
                }
        break
			}
      case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT: case iris_1825i_13.JUMPXEQKNIL: case iris_1825i_13.JUMPXEQKB:
			case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS:
                iris_1825i_253(iris_1825i_16(iris_1825i_37)); break
      case iris_1825i_13.JUMPIFEQ: case iris_1825i_13.JUMPIFLE: case iris_1825i_13.JUMPIFLT: case iris_1825i_13.JUMPIFNOTEQ:
            case iris_1825i_13.JUMPIFNOTLE: case iris_1825i_13.JUMPIFNOTLT:
            iris_1825i_253(iris_1825i_16(iris_1825i_37))
                if (iris_1825i_477 + 1 < this.n) iris_1825i_253(iris_1825i_22(this.proto.code[iris_1825i_477 + 1]))
				break
         case iris_1825i_13.ADD: case iris_1825i_13.SUB: case iris_1825i_13.MUL: case iris_1825i_13.DIV: case iris_1825i_13.MOD: case iris_1825i_13.POW:
      case iris_1825i_13.IDIV: case iris_1825i_13.AND: case iris_1825i_13.OR:
        iris_1825i_253(iris_1825i_17(iris_1825i_37)); iris_1825i_253(iris_1825i_18(iris_1825i_37)); break
			case iris_1825i_13.ADDK: case iris_1825i_13.SUBK: case iris_1825i_13.MULK: case iris_1825i_13.DIVK: case iris_1825i_13.MODK: case iris_1825i_13.POWK:
      case iris_1825i_13.ANDK: case iris_1825i_13.ORK: case iris_1825i_13.IDIVK:
            iris_1825i_253(iris_1825i_17(iris_1825i_37)); break
      case iris_1825i_13.SUBRK: case iris_1825i_13.DIVRK:
            iris_1825i_253(iris_1825i_18(iris_1825i_37)); break
      case iris_1825i_13.CONCAT:
				for (let iris_1825i_54 = iris_1825i_17(iris_1825i_37); iris_1825i_54 <= iris_1825i_18(iris_1825i_37); iris_1825i_54++) iris_1825i_253(iris_1825i_54)
        break;
      case iris_1825i_13.SETLIST: {
        const iris_1825i_259 = (iris_1825i_18(iris_1825i_37) === 0) ? 1 : iris_1825i_18(iris_1825i_37) - 1
				for (let iris_1825i_54 = iris_1825i_17(iris_1825i_37); iris_1825i_54 < iris_1825i_17(iris_1825i_37) + iris_1825i_259; iris_1825i_54++) iris_1825i_253(iris_1825i_54);
        break
            }
			case iris_1825i_13.NEWCLOSURE: {
        const iris_1825i_135 = iris_1825i_19(iris_1825i_37)
                if (iris_1825i_135 >= 0 && iris_1825i_135 < this.proto.children.length) {
					const iris_1825i_67 = this.program.protos[this.proto.children[iris_1825i_135]]
          for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_67.nups; iris_1825i_129++) {
            if (iris_1825i_477 + 1 + iris_1825i_129 >= this.n) break;
						const iris_1825i_136 = this.proto.code[iris_1825i_477 + 1 + iris_1825i_129]
            if (iris_1825i_16(iris_1825i_136) !== 2) iris_1825i_253(iris_1825i_17(iris_1825i_136))
          }
                }
            break;
            }
			case iris_1825i_13.DUPCLOSURE: {
        const iris_1825i_240 = this.const_at(iris_1825i_19(iris_1825i_37))
                if (iris_1825i_240 && iris_1825i_240.kind === iris_1825i_14.Closure && iris_1825i_240.closureProto >= 0 &&
					iris_1825i_240.closureProto < this.program.protos.length) {
          const iris_1825i_67 = this.program.protos[iris_1825i_240.closureProto]
                    for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_67.nups && iris_1825i_477 + 1 + iris_1825i_129 < this.n; iris_1825i_129++) {
                  const iris_1825i_136 = this.proto.code[iris_1825i_477 + 1 + iris_1825i_129]
            if (iris_1825i_16(iris_1825i_136) !== 2) iris_1825i_253(iris_1825i_17(iris_1825i_136));
               }
				}
        break
      }
			case iris_1825i_13.FORNPREP:
        iris_1825i_253(iris_1825i_16(iris_1825i_37)); iris_1825i_253(iris_1825i_16(iris_1825i_37) + 1); iris_1825i_253(iris_1825i_16(iris_1825i_37) + 2); break;
      case iris_1825i_13.FORNLOOP:
        iris_1825i_254(iris_1825i_16(iris_1825i_37) + 3); break;
            case iris_1825i_13.FORGPREP: case iris_1825i_13.FORGPREP_INEXT: case iris_1825i_13.FORGPREP_NEXT:
            iris_1825i_253(iris_1825i_16(iris_1825i_37)); iris_1825i_253(iris_1825i_16(iris_1825i_37) + 1); iris_1825i_253(iris_1825i_16(iris_1825i_37) + 2); break;
      case iris_1825i_13.FORGLOOP:
                if (iris_1825i_477 + 1 < this.n) {
					const iris_1825i_260 = this.proto.code[iris_1825i_477 + 1] & 0xff;
               for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_260; iris_1825i_125++) iris_1825i_254(iris_1825i_16(iris_1825i_37) + 3 + iris_1825i_125);
        }
            break
      default: break;
    }
  }


live_pass () {
      this.liveOut = new Array(this.n);
    for (let iris_1825i_5 = 0; iris_1825i_5 < this.n; iris_1825i_5++) this.liveOut[iris_1825i_5] = new Array(this.R).fill(false)
		const iris_1825i_261 = new Array(this.R).fill(false)
      const iris_1825i_262 = []
    const iris_1825i_263 = []

    for (let iris_1825i_264 = 0; iris_1825i_264 < 4; iris_1825i_264++) {
      for (let iris_1825i_265 = this.n - 1; iris_1825i_265 >= 0; iris_1825i_265--) {
            const iris_1825i_37 = this.proto.code[iris_1825i_265]
                this.reg_uses(iris_1825i_265, iris_1825i_37, iris_1825i_21(iris_1825i_37), iris_1825i_262, iris_1825i_263);
        iris_1825i_261.fill(false);
        for (let iris_1825i_5 = 0; iris_1825i_5 < this.R; iris_1825i_5++) iris_1825i_261[iris_1825i_5] = this.liveOut[iris_1825i_265][iris_1825i_5]
                for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_262.length; iris_1825i_5++) if (iris_1825i_262[iris_1825i_5] < this.R) iris_1825i_261[iris_1825i_262[iris_1825i_5]] = false;
                for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_263.length; iris_1825i_5++) if (iris_1825i_263[iris_1825i_5] < this.R) iris_1825i_261[iris_1825i_263[iris_1825i_5]] = true
				if (iris_1825i_265 > 0) this.liveOut[iris_1825i_265 - 1] = iris_1825i_261.slice()
         }
        }
    }
alive (iris_1825i_119, iris_1825i_54) {
		if (iris_1825i_119 < 0 || iris_1825i_119 >= this.n || iris_1825i_54 < 0 || iris_1825i_54 >= this.R) return false;
      if (iris_1825i_54 >= this.liveOut[iris_1825i_119].length) return false
        return this.liveOut[iris_1825i_119][iris_1825i_54]
  }
is_cond_jump (iris_1825i_30) {
        switch (iris_1825i_30) {
      case iris_1825i_13.JUMPIF: case iris_1825i_13.JUMPIFNOT: case iris_1825i_13.JUMPIFEQ: case iris_1825i_13.JUMPIFLE:
         case iris_1825i_13.JUMPIFLT: case iris_1825i_13.JUMPIFNOTEQ: case iris_1825i_13.JUMPIFNOTLE: case iris_1825i_13.JUMPIFNOTLT:
      case iris_1825i_13.JUMPXEQKNIL: case iris_1825i_13.JUMPXEQKB: case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS:
				return true;
			default:
				return false
        }
	}

make_loops() {
		const iris_1825i_266 = new Set()
      for (let iris_1825i_5 = 0; iris_1825i_5 < this.n; iris_1825i_5++) {
      const iris_1825i_30 = iris_1825i_21(this.proto.code[iris_1825i_5])
      if (iris_1825i_31(iris_1825i_30) === 2 || iris_1825i_30 === iris_1825i_13.JUMP || iris_1825i_30 === iris_1825i_13.JUMPBACK || iris_1825i_30 === iris_1825i_13.JUMPX) {
        const iris_1825i_163 = iris_1825i_34(this.proto.code, iris_1825i_5)
                if (iris_1825i_163 >= 0 && iris_1825i_163 < this.n && iris_1825i_163 < iris_1825i_5) {
					if (iris_1825i_163 > 0) {
						const iris_1825i_267 = iris_1825i_21(this.proto.code[iris_1825i_163 - 1]);
                  if (iris_1825i_267 === iris_1825i_13.FORGPREP || iris_1825i_267 === iris_1825i_13.FORGPREP_INEXT || iris_1825i_267 === iris_1825i_13.FORGPREP_NEXT ||
							iris_1825i_267 === iris_1825i_13.FORNPREP) iris_1825i_266.add(iris_1825i_163 - 1);
            else iris_1825i_266.add(iris_1825i_163);
                    } else {
            iris_1825i_266.add(iris_1825i_163)
          }
        }
      }
    }

      for (const iris_1825i_268 of iris_1825i_266) {
      if (this.loops.has(iris_1825i_268)) continue
			const iris_1825i_173 = { type: 0, header: iris_1825i_268, exit: 0, bodyStart: 0, backedge: -1, forA: 0, varCount: 0, condJump: -1, isIpairs: false }
			const iris_1825i_269 = iris_1825i_21(this.proto.code[iris_1825i_268])

      if (iris_1825i_269 === iris_1825i_13.FORNPREP) {
				iris_1825i_173.type = iris_1825i_234;
				iris_1825i_173.forA = iris_1825i_16(this.proto.code[iris_1825i_268]);
        iris_1825i_173.exit = iris_1825i_268 + 1 + iris_1825i_19(this.proto.code[iris_1825i_268])
            iris_1825i_173.bodyStart = iris_1825i_268 + 1
        for (let iris_1825i_5 = iris_1825i_268 + 1; iris_1825i_5 < iris_1825i_173.exit && iris_1825i_5 < this.n; iris_1825i_5++) {
          if (iris_1825i_21(this.proto.code[iris_1825i_5]) === iris_1825i_13.FORNLOOP &&
						(iris_1825i_34(this.proto.code, iris_1825i_5) === iris_1825i_268 || iris_1825i_34(this.proto.code, iris_1825i_5) === iris_1825i_268 + 1)) {
						iris_1825i_173.backedge = iris_1825i_5;
            break
          }
				}
                if (iris_1825i_173.backedge < 0) continue
            } else if (iris_1825i_269 === iris_1825i_13.FORGPREP || iris_1825i_269 === iris_1825i_13.FORGPREP_INEXT || iris_1825i_269 === iris_1825i_13.FORGPREP_NEXT) {
        iris_1825i_173.type = iris_1825i_235;
        iris_1825i_173.forA = iris_1825i_16(this.proto.code[iris_1825i_268])
				iris_1825i_173.isIpairs = (iris_1825i_269 === iris_1825i_13.FORGPREP_INEXT);
				const iris_1825i_270 = iris_1825i_34(this.proto.code, iris_1825i_268)
            if (iris_1825i_270 < 0 || iris_1825i_270 >= this.n || iris_1825i_270 <= iris_1825i_268) continue;
        iris_1825i_173.backedge = iris_1825i_270;
            iris_1825i_173.bodyStart = iris_1825i_268 + 1
        iris_1825i_173.exit = iris_1825i_270 + 2
                if (iris_1825i_173.backedge + 1 < this.n) iris_1825i_173.varCount = this.proto.code[iris_1825i_173.backedge + 1] & 0xff
      } else {
				let iris_1825i_271 = -1;
            for (let iris_1825i_5 = iris_1825i_268 + 1; iris_1825i_5 < this.n; iris_1825i_5++) {
					const iris_1825i_272 = iris_1825i_21(this.proto.code[iris_1825i_5])
          if (iris_1825i_31(iris_1825i_272) === 2 || iris_1825i_272 === iris_1825i_13.JUMP || iris_1825i_272 === iris_1825i_13.JUMPBACK || iris_1825i_272 === iris_1825i_13.JUMPX) {
						const iris_1825i_163 = iris_1825i_34(this.proto.code, iris_1825i_5)
						if (iris_1825i_163 === iris_1825i_268) { iris_1825i_271 = iris_1825i_5; break }
                    }
        }
        if (iris_1825i_271 < 0) continue
        const iris_1825i_273 = iris_1825i_21(this.proto.code[iris_1825i_271]);


        let iris_1825i_274 = -1
        for (let iris_1825i_5 = iris_1825i_268; iris_1825i_5 < iris_1825i_271 && iris_1825i_5 < this.n;) {
          const iris_1825i_272 = iris_1825i_21(this.proto.code[iris_1825i_5]);
          if (this.is_cond_jump(iris_1825i_272)) {
						const iris_1825i_133 = iris_1825i_34(this.proto.code, iris_1825i_5);
            if (iris_1825i_133 > iris_1825i_271) { iris_1825i_274 = iris_1825i_5; break }
               }
          iris_1825i_5 += iris_1825i_31(iris_1825i_272);
        }

        if (iris_1825i_274 >= 0) {
               iris_1825i_173.type = iris_1825i_231
					iris_1825i_173.condJump = iris_1825i_274;
          iris_1825i_173.exit = iris_1825i_34(this.proto.code, iris_1825i_274);
               iris_1825i_173.bodyStart = iris_1825i_274 + iris_1825i_31(iris_1825i_21(this.proto.code[iris_1825i_274]))
					iris_1825i_173.backedge = iris_1825i_271
        } else if (iris_1825i_273 === iris_1825i_13.JUMPBACK || iris_1825i_273 === iris_1825i_13.JUMP) {
          iris_1825i_173.type = iris_1825i_232
          iris_1825i_173.exit = iris_1825i_271 + 1
					iris_1825i_173.bodyStart = iris_1825i_268;
          iris_1825i_173.backedge = iris_1825i_271;
				} else {
					iris_1825i_173.type = iris_1825i_233
          iris_1825i_173.exit = iris_1825i_271 + iris_1825i_31(iris_1825i_273);
               iris_1825i_173.bodyStart = iris_1825i_268
          iris_1825i_173.backedge = iris_1825i_271
            }
      }
         this.loops.set(iris_1825i_268, iris_1825i_173)
		}
  }

cond_of (iris_1825i_119, iris_1825i_547) {
    const iris_1825i_37 = this.proto.code[iris_1825i_119]
		const iris_1825i_30 = iris_1825i_21(iris_1825i_37);
    const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
      const iris_1825i_275 = this.read_reg(iris_1825i_242);
      const iris_1825i_276 = () => {
      if (iris_1825i_119 + 1 < this.n) return this.read_reg(iris_1825i_22(this.proto.code[iris_1825i_119 + 1]))
      return this.leaf('nil')
    }
    switch (iris_1825i_30) {
      case iris_1825i_13.JUMPIF: return iris_1825i_547 ? this.un('not', iris_1825i_275) : iris_1825i_275
			case iris_1825i_13.JUMPIFNOT: return iris_1825i_547 ? iris_1825i_275 : this.un('not', iris_1825i_275);
			case iris_1825i_13.JUMPIFEQ: return this.bin(iris_1825i_547 ? "~=" : '==', iris_1825i_275, iris_1825i_276(), 3)
			case iris_1825i_13.JUMPIFLE: return this.bin(iris_1825i_547 ? ">" : '<=', iris_1825i_275, iris_1825i_276(), 3);
      case iris_1825i_13.JUMPIFLT: return this.bin(iris_1825i_547 ? '>=' : '<', iris_1825i_275, iris_1825i_276(), 3)
			case iris_1825i_13.JUMPIFNOTEQ: return this.bin(iris_1825i_547 ? '==' : "~=", iris_1825i_275, iris_1825i_276(), 3);
            case iris_1825i_13.JUMPIFNOTLE: return this.bin(iris_1825i_547 ? '<=' : '>', iris_1825i_275, iris_1825i_276(), 3);
         case iris_1825i_13.JUMPIFNOTLT: return this.bin(iris_1825i_547 ? "<" : '>=', iris_1825i_275, iris_1825i_276(), 3);
            case iris_1825i_13.JUMPXEQKNIL: {
                const iris_1825i_277 = iris_1825i_27(this.proto.code[iris_1825i_119 + 1]);
            const iris_1825i_278 = iris_1825i_547 ? iris_1825i_277 : !iris_1825i_277
                return this.bin(iris_1825i_278 ? '==' : '~=', iris_1825i_275, this.leaf('nil'), 3);
			}
            case iris_1825i_13.JUMPXEQKB: {
				const iris_1825i_193 = iris_1825i_26(this.proto.code[iris_1825i_119 + 1]) !== 0
				const iris_1825i_277 = iris_1825i_27(this.proto.code[iris_1825i_119 + 1])
				const iris_1825i_278 = iris_1825i_547 ? iris_1825i_277 : !iris_1825i_277
            return this.bin(iris_1825i_278 ? '==' : '~=', iris_1825i_275, this.leaf(iris_1825i_193 ? "true" : 'false'), 3)
			}
			case iris_1825i_13.JUMPXEQKN: case iris_1825i_13.JUMPXEQKS: {
        const iris_1825i_277 = iris_1825i_27(this.proto.code[iris_1825i_119 + 1]);
        const iris_1825i_278 = iris_1825i_547 ? iris_1825i_277 : !iris_1825i_277
                return this.bin(iris_1825i_278 ? "==" : '~=', iris_1825i_275, this.leaf(this.const_from(iris_1825i_25(this.proto.code[iris_1825i_119 + 1]))), 3);
            }
      default:
                return iris_1825i_275
        }
   }

  say(iris_1825i_4, iris_1825i_363) { iris_1825i_4.emit(iris_1825i_363) }
say_expr(iris_1825i_4, iris_1825i_79) {
    const iris_1825i_177 = iris_1825i_182(iris_1825i_79);
    if (iris_1825i_177.length === 0) return;
    iris_1825i_4.emit(iris_1825i_177[0][1])
    for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_177.length; iris_1825i_5++) iris_1825i_4.push(iris_1825i_4.indent + iris_1825i_177[iris_1825i_5][0], iris_1825i_177[iris_1825i_5][1])
	}
assign(iris_1825i_4, iris_1825i_275, iris_1825i_383) {
		const iris_1825i_177 = iris_1825i_182(iris_1825i_383)
    if (iris_1825i_177.length === 0) return
    const iris_1825i_279 = iris_1825i_275 + " = " + iris_1825i_177[0][1]
    iris_1825i_4.emit(iris_1825i_279)
    for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_177.length; iris_1825i_5++) iris_1825i_4.push(iris_1825i_4.indent + iris_1825i_177[iris_1825i_5][0], iris_1825i_177[iris_1825i_5][1]);
	}
force_local(iris_1825i_4, iris_1825i_54) {
    if (this.regDeclared[iris_1825i_54]) return;
    let iris_1825i_118 = this.regName[iris_1825i_54]
    if (iris_1825i_118.length === 0) {
			const iris_1825i_280 = this.locv_name(iris_1825i_54, this.currentPc)
      iris_1825i_118 = iris_1825i_280.length > 0 ? iris_1825i_280 : this.fresh_name("v", this.regTy[iris_1825i_54] && this.regTy[iris_1825i_54].name);
      }
        this.regName[iris_1825i_54] = iris_1825i_118
        this.regDeclared[iris_1825i_54] = true
		const iris_1825i_193 = this.reg[iris_1825i_54] ? this.reg[iris_1825i_54] : this.leaf("nil");
		this.assign(iris_1825i_4, "local " + iris_1825i_118, iris_1825i_193)
    this.reg[iris_1825i_54] = this.leaf(iris_1825i_118)
      this.maxLocals = Math.max(this.maxLocals, iris_1825i_54 + 1);
    }

store_reg(iris_1825i_4, iris_1825i_54, iris_1825i_477, iris_1825i_79, iris_1825i_548) {
    if (iris_1825i_54 >= this.R) return
    const iris_1825i_281 = this.locv_name(iris_1825i_54, iris_1825i_477);
    const iris_1825i_282 = !this.opt.foldSingleUseTemps &&
			(iris_1825i_79.kind === iris_1825i_158.Call || iris_1825i_79.kind === iris_1825i_158.MethodCall);
    if ((iris_1825i_281.length > 0 || iris_1825i_548 || iris_1825i_282) && !this.regDeclared[iris_1825i_54]) {
         const iris_1825i_118 = iris_1825i_281.length > 0 ? iris_1825i_281
        : (this.regName[iris_1825i_54].length === 0 ? this.fresh_name('v', iris_1825i_79.ty ? iris_1825i_79.ty.name : null) : this.regName[iris_1825i_54])
      this.regName[iris_1825i_54] = iris_1825i_118
            this.regDeclared[iris_1825i_54] = true;
      this.reg[iris_1825i_54] = this.leaf(iris_1825i_118);
			this.regOrigin[iris_1825i_54] = iris_1825i_79
      if (iris_1825i_79.ty) this.regTy[iris_1825i_54] = iris_1825i_79.ty
			this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_79.ty), iris_1825i_79);
         this.maxLocals = Math.max(this.maxLocals, iris_1825i_54 + 1)
            return;
		}
		if (this.regDeclared[iris_1825i_54]) {
			this.assign(iris_1825i_4, this.regName[iris_1825i_54], iris_1825i_79);
            this.reg[iris_1825i_54] = this.leaf(this.regName[iris_1825i_54]);
      this.regOrigin[iris_1825i_54] = iris_1825i_79
      if (iris_1825i_79.ty) this.regTy[iris_1825i_54] = iris_1825i_79.ty
      return;
		}
    this.reg[iris_1825i_54] = iris_1825i_79;
        this.regOrigin[iris_1825i_54] = iris_1825i_79
      if (iris_1825i_79.ty) this.regTy[iris_1825i_54] = iris_1825i_79.ty
  }

maybe_if_expr(iris_1825i_4, iris_1825i_36) {
		if (!this.opt.ifExpressions) return -1;
        if (iris_1825i_36 + 2 >= this.n) return -1;
        const iris_1825i_30 = iris_1825i_21(this.proto.code[iris_1825i_36])
        if (!this.is_cond_jump(iris_1825i_30)) return -1;
		const iris_1825i_283 = iris_1825i_34(this.proto.code, iris_1825i_36);
    if (iris_1825i_283 <= iris_1825i_36 || iris_1825i_283 >= this.n) return -1;
    const iris_1825i_284 = this.proto.code[iris_1825i_36 + 1]
      // LOADB-true / LOADB-false pair means the compiler had an if-expression
      if (iris_1825i_21(iris_1825i_284) === iris_1825i_13.LOADB && iris_1825i_18(iris_1825i_284) === 1 && iris_1825i_283 === iris_1825i_36 + 3) {
         const iris_1825i_285 = iris_1825i_16(iris_1825i_284);
      const iris_1825i_286 = this.proto.code[iris_1825i_283]
         if (iris_1825i_21(iris_1825i_286) === iris_1825i_13.LOADB && iris_1825i_16(iris_1825i_286) === iris_1825i_285) {
                const iris_1825i_287 = this.cond_of(iris_1825i_36, true)
        const iris_1825i_193 = iris_1825i_17(iris_1825i_284) ? iris_1825i_287 : this.un("not", iris_1825i_287)
        this.store_reg(iris_1825i_4, iris_1825i_285, iris_1825i_36, iris_1825i_193, false)
                return iris_1825i_283 + 1;
      }
    }
    const iris_1825i_288 = iris_1825i_36 + iris_1825i_31(iris_1825i_30)
    const iris_1825i_289 = iris_1825i_283
        if (iris_1825i_289 <= iris_1825i_288 || iris_1825i_289 >= this.n) return -1
      const iris_1825i_290 = iris_1825i_289 - 1;
      if (iris_1825i_290 < iris_1825i_288 || iris_1825i_21(this.proto.code[iris_1825i_290]) !== iris_1825i_13.JUMP) return -1;
        const iris_1825i_291 = iris_1825i_34(this.proto.code, iris_1825i_290)
      if (iris_1825i_291 <= iris_1825i_289 || iris_1825i_291 > this.n) return -1
      const iris_1825i_292 = iris_1825i_290 - iris_1825i_288;
    const iris_1825i_293 = iris_1825i_291 - iris_1825i_289;
    if (iris_1825i_292 > 4 || iris_1825i_293 > 4) return -1
    const iris_1825i_294 = this.proto.code[iris_1825i_289]
      const iris_1825i_287 = this.cond_of(iris_1825i_36, true)
    const iris_1825i_295 = this.clone()
        const iris_1825i_296 = new iris_1825i_236()
    iris_1825i_295.walk(iris_1825i_296, iris_1825i_288, iris_1825i_290, -1, false)
    if (iris_1825i_21(iris_1825i_294) === iris_1825i_13.LOADNIL && iris_1825i_293 === 1) {
         const iris_1825i_285 = iris_1825i_16(iris_1825i_294)
      const iris_1825i_297 = this.leaf('nil')
         const iris_1825i_298 = iris_1825i_295.read_reg(iris_1825i_285);
			if (iris_1825i_298 && iris_1825i_298.kind !== iris_1825i_158.Leaf) {
                const iris_1825i_299 = this.if_else(iris_1825i_287, iris_1825i_298, iris_1825i_297);
        this.store_reg(iris_1825i_4, iris_1825i_285, iris_1825i_36, iris_1825i_299, true);
        return iris_1825i_291;
      }
    } else if (iris_1825i_21(iris_1825i_294) === iris_1825i_13.LOADK && iris_1825i_293 === 1) {
            const iris_1825i_285 = iris_1825i_16(iris_1825i_294);
			const iris_1825i_297 = this.leaf(this.const_from(iris_1825i_19(iris_1825i_294)))
      const iris_1825i_298 = iris_1825i_295.read_reg(iris_1825i_285)
            if (iris_1825i_298) {
        const iris_1825i_299 = this.if_else(iris_1825i_287, iris_1825i_298, iris_1825i_297);
                this.store_reg(iris_1825i_4, iris_1825i_285, iris_1825i_36, iris_1825i_299, true);
        return iris_1825i_291
			}
		}
		return -1
  }
skip_fast_call(iris_1825i_4, iris_1825i_119) {
        const iris_1825i_37 = this.proto.code[iris_1825i_119]
		const iris_1825i_300 = iris_1825i_21(iris_1825i_37)
        return iris_1825i_119 + iris_1825i_31(iris_1825i_300);
  }
comment_for (iris_1825i_135, iris_1825i_302, iris_1825i_118) {
		let iris_1825i_67 = "--[[ "
		if (iris_1825i_118.length > 0 && iris_1825i_118[0] !== '(') iris_1825i_67 += iris_1825i_118 + ' | '
		iris_1825i_67 += 'Line: ' + iris_1825i_135.linedefined;
        if (iris_1825i_302.length > 0) {
			iris_1825i_67 += " | Upvalues: "
            for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_302.length; iris_1825i_5++) {
				if (iris_1825i_5) iris_1825i_67 += ', '
        iris_1825i_67 += iris_1825i_302[iris_1825i_5].name + (iris_1825i_302[iris_1825i_5].byRef ? ' (ref)' : ' (copy)');
      }
      }
        iris_1825i_67 += ' ]]';
    return iris_1825i_67;
	}

new_closure (iris_1825i_4, iris_1825i_119) {
      const iris_1825i_37 = this.proto.code[iris_1825i_119]
    const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
    const iris_1825i_301 = iris_1825i_19(iris_1825i_37)
    if (iris_1825i_301 < 0 || iris_1825i_301 >= this.proto.children.length) {
			this.store_reg(iris_1825i_4, iris_1825i_242, iris_1825i_119, this.leaf("?"), false)
      return iris_1825i_119 + 1;
      }
    const iris_1825i_67 = this.program.protos[this.proto.children[iris_1825i_301]]
    const iris_1825i_62 = iris_1825i_67.nups;
    const iris_1825i_302 = []
    for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_62 && iris_1825i_119 + 1 + iris_1825i_129 < this.n; iris_1825i_129++) {
			const iris_1825i_136 = this.proto.code[iris_1825i_119 + 1 + iris_1825i_129]
         const iris_1825i_47 = { name: '', byRef: false, isParentUpvalue: false }
			const iris_1825i_137 = iris_1825i_16(iris_1825i_136)
      const iris_1825i_239 = iris_1825i_17(iris_1825i_136);
      if (iris_1825i_137 === 2) {
        iris_1825i_47.isParentUpvalue = true
				iris_1825i_47.name = this.up_name(iris_1825i_239)
            if (iris_1825i_239 < this.upvals.length) iris_1825i_47.byRef = this.upvals[iris_1825i_239].byRef
            } else {
				iris_1825i_47.byRef = (iris_1825i_137 === 1);
            iris_1825i_47.name = this.cap_name(iris_1825i_4, iris_1825i_119, iris_1825i_239)
         }
			iris_1825i_302.push(iris_1825i_47)
      }
    const iris_1825i_303 = iris_1825i_392(this.program, iris_1825i_67, iris_1825i_302, false)
		let iris_1825i_304 = iris_1825i_67.debugname;
		if (iris_1825i_304.length > 0 && iris_1825i_304[0] === '(') iris_1825i_304 = ""
		iris_1825i_303.comment = this.comment_for(iris_1825i_67, iris_1825i_302, iris_1825i_304)
        const iris_1825i_305 = iris_1825i_159(iris_1825i_158.Lambda)
    iris_1825i_305.hdr = iris_1825i_303.header;
    iris_1825i_305.about = iris_1825i_303.comment
		iris_1825i_305.srcLine = iris_1825i_67.linedefined
		iris_1825i_305.bodyLines = iris_1825i_303.body.lines.map(iris_1825i_173 => [iris_1825i_173.level, iris_1825i_173.text]);
      iris_1825i_305.ty = iris_1825i_160(1, "function");
        const iris_1825i_306 = iris_1825i_119 + 1 + iris_1825i_62
    if (iris_1825i_306 < this.n && iris_1825i_21(this.proto.code[iris_1825i_306]) === iris_1825i_13.SETGLOBAL &&
         iris_1825i_16(this.proto.code[iris_1825i_306]) === iris_1825i_242 && iris_1825i_306 + 1 < this.n) {
			const iris_1825i_307 = this.const_at(this.proto.code[iris_1825i_306 + 1])
      if (iris_1825i_307 && iris_1825i_307.kind === iris_1825i_14.String && iris_1825i_148(iris_1825i_307.str)) {
            const iris_1825i_308 = iris_1825i_307.str
        const iris_1825i_309 = iris_1825i_303.header.indexOf('(')
            const iris_1825i_310 = (iris_1825i_309 !== -1) ? iris_1825i_303.header.slice(iris_1825i_309) : "()";
                iris_1825i_305.hdr = "function " + iris_1825i_308 + iris_1825i_310;
				iris_1825i_305.about = this.comment_for(iris_1825i_67, iris_1825i_302, iris_1825i_308)
                this.say_expr(iris_1825i_4, iris_1825i_305)
        this.nuke_reg(iris_1825i_242);
				return iris_1825i_306 + 2
      }
    }
		if (iris_1825i_304.length > 0 && iris_1825i_148(iris_1825i_304)) {
			const iris_1825i_309 = iris_1825i_303.header.indexOf('(')
            const iris_1825i_310 = (iris_1825i_309 !== -1) ? iris_1825i_303.header.slice(iris_1825i_309) : '()';
      iris_1825i_305.hdr = "local function " + iris_1825i_304 + iris_1825i_310;
			iris_1825i_305.about = this.comment_for(iris_1825i_67, iris_1825i_302, iris_1825i_304);
            this.say_expr(iris_1825i_4, iris_1825i_305);
			this.usedNames.add(iris_1825i_304)
      this.name_reg(iris_1825i_242, iris_1825i_304)
      this.regDeclared[iris_1825i_242] = true
            return iris_1825i_306;
        }
		if (iris_1825i_306 < this.n && iris_1825i_21(this.proto.code[iris_1825i_306]) === iris_1825i_13.SETTABLEKS &&
			iris_1825i_16(this.proto.code[iris_1825i_306]) === iris_1825i_242 && iris_1825i_306 + 1 < this.n) {
      const iris_1825i_311 = iris_1825i_17(this.proto.code[iris_1825i_306]);
            const iris_1825i_312 = this.const_at(this.proto.code[iris_1825i_306 + 1]);
         if (iris_1825i_312 && iris_1825i_312.kind === iris_1825i_14.String && iris_1825i_148(iris_1825i_312.str)) {
				const iris_1825i_313 = iris_1825i_312.str
                const iris_1825i_314 = this.read_reg(iris_1825i_311);
                const iris_1825i_315 = iris_1825i_226(iris_1825i_314);
				const iris_1825i_309 = iris_1825i_303.header.indexOf('(');
				const iris_1825i_310 = (iris_1825i_309 !== -1) ? iris_1825i_303.header.slice(iris_1825i_309) : '()'
				iris_1825i_305.hdr = 'function' + iris_1825i_310;
				iris_1825i_305.about = this.comment_for(iris_1825i_67, iris_1825i_302, '');
        this.assign(iris_1825i_4, iris_1825i_315 + '.' + iris_1825i_313, iris_1825i_305)
            this.nuke_reg(iris_1825i_242)
            return iris_1825i_306 + 2
			}
    }
    this.store_reg(iris_1825i_4, iris_1825i_242, iris_1825i_119, iris_1825i_305, false);
    return iris_1825i_306
    }
dup_closure (iris_1825i_4, iris_1825i_119) {
    const iris_1825i_37 = this.proto.code[iris_1825i_119]
        const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
    const iris_1825i_67 = this.const_at(iris_1825i_19(iris_1825i_37));
    if (!iris_1825i_67 || iris_1825i_67.kind !== iris_1825i_14.Closure || iris_1825i_67.closureProto < 0 ||
			iris_1825i_67.closureProto >= this.program.protos.length) {
			this.store_reg(iris_1825i_4, iris_1825i_242, iris_1825i_119, this.leaf("<closure>"), false)
      return iris_1825i_119 + 1
    }
		const iris_1825i_135 = this.program.protos[iris_1825i_67.closureProto]
		const iris_1825i_62 = iris_1825i_135.nups
    const iris_1825i_302 = []
		for (let iris_1825i_129 = 0; iris_1825i_129 < iris_1825i_62 && iris_1825i_119 + 1 + iris_1825i_129 < this.n; iris_1825i_129++) {
			const iris_1825i_136 = this.proto.code[iris_1825i_119 + 1 + iris_1825i_129]
			const iris_1825i_47 = { name: '', byRef: false, isParentUpvalue: false }
      const iris_1825i_137 = iris_1825i_16(iris_1825i_136);
         const iris_1825i_239 = iris_1825i_17(iris_1825i_136)
			if (iris_1825i_137 === 2) {
            iris_1825i_47.isParentUpvalue = true
            iris_1825i_47.name = this.up_name(iris_1825i_239);
                if (iris_1825i_239 < this.upvals.length) iris_1825i_47.byRef = this.upvals[iris_1825i_239].byRef;
			} else {
				iris_1825i_47.byRef = (iris_1825i_137 === 1);
            iris_1825i_47.name = this.cap_name(iris_1825i_4, iris_1825i_119, iris_1825i_239)
      }
      iris_1825i_302.push(iris_1825i_47)
		}
    const iris_1825i_303 = iris_1825i_392(this.program, iris_1825i_135, iris_1825i_302, false);
		let iris_1825i_304 = iris_1825i_135.debugname
    if (iris_1825i_304.length > 0 && iris_1825i_304[0] === '(') iris_1825i_304 = '';
    iris_1825i_303.comment = this.comment_for(iris_1825i_135, iris_1825i_302, iris_1825i_304);
        const iris_1825i_305 = iris_1825i_159(iris_1825i_158.Lambda);
      iris_1825i_305.hdr = iris_1825i_303.header
    iris_1825i_305.about = iris_1825i_303.comment;
		iris_1825i_305.srcLine = iris_1825i_135.linedefined;
        iris_1825i_305.bodyLines = iris_1825i_303.body.lines.map(iris_1825i_173 => [iris_1825i_173.level, iris_1825i_173.text]);
    iris_1825i_305.ty = iris_1825i_160(1, "function");
      const iris_1825i_306 = iris_1825i_119 + 1 + iris_1825i_62;
		if (iris_1825i_306 < this.n && iris_1825i_21(this.proto.code[iris_1825i_306]) === iris_1825i_13.SETGLOBAL &&
      iris_1825i_16(this.proto.code[iris_1825i_306]) === iris_1825i_242 && iris_1825i_306 + 1 < this.n) {
         const iris_1825i_307 = this.const_at(this.proto.code[iris_1825i_306 + 1])
			if (iris_1825i_307 && iris_1825i_307.kind === iris_1825i_14.String && iris_1825i_148(iris_1825i_307.str)) {
        const iris_1825i_308 = iris_1825i_307.str
                const iris_1825i_309 = iris_1825i_303.header.indexOf('(');
				const iris_1825i_310 = (iris_1825i_309 !== -1) ? iris_1825i_303.header.slice(iris_1825i_309) : '()';
				iris_1825i_305.hdr = 'function ' + iris_1825i_308 + iris_1825i_310
				iris_1825i_305.about = this.comment_for(iris_1825i_135, iris_1825i_302, iris_1825i_308);
        this.say_expr(iris_1825i_4, iris_1825i_305);
				this.nuke_reg(iris_1825i_242);
        return iris_1825i_306 + 2;
         }
		}
      if (iris_1825i_304.length > 0 && iris_1825i_148(iris_1825i_304)) {
			const iris_1825i_309 = iris_1825i_303.header.indexOf('(');
         const iris_1825i_310 = (iris_1825i_309 !== -1) ? iris_1825i_303.header.slice(iris_1825i_309) : "()"
			iris_1825i_305.hdr = 'local function ' + iris_1825i_304 + iris_1825i_310;
            iris_1825i_305.about = this.comment_for(iris_1825i_135, iris_1825i_302, iris_1825i_304)
         this.say_expr(iris_1825i_4, iris_1825i_305);
			this.usedNames.add(iris_1825i_304);
			this.name_reg(iris_1825i_242, iris_1825i_304)
      this.regDeclared[iris_1825i_242] = true
            return iris_1825i_306
    }
      this.store_reg(iris_1825i_4, iris_1825i_242, iris_1825i_119, iris_1825i_305, false)
      return iris_1825i_306;
  }

do_call (iris_1825i_4, iris_1825i_119) {
      const iris_1825i_37 = this.proto.code[iris_1825i_119]
    const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
      const iris_1825i_255 = iris_1825i_17(iris_1825i_37);
      const iris_1825i_256 = iris_1825i_18(iris_1825i_37);
    const iris_1825i_316 = this.methodInfo[iris_1825i_242]
      this.methodInfo[iris_1825i_242] = null;
    const iris_1825i_317 = []
		let iris_1825i_257 = (iris_1825i_255 === 0) ? -1 : iris_1825i_255 - 1
      let iris_1825i_318 = iris_1825i_242 + 1;
      let iris_1825i_319 = iris_1825i_257
    if (iris_1825i_316) {
      iris_1825i_318 = iris_1825i_242 + 2
      iris_1825i_319 = (iris_1825i_257 === -1) ? -1 : iris_1825i_257 - 1
      }
    if (iris_1825i_319 === -1) {
			for (let iris_1825i_54 = iris_1825i_318; iris_1825i_54 < Math.min(iris_1825i_318 + 4, this.R); iris_1825i_54++) {
        if (!this.reg[iris_1825i_54]) break;
        iris_1825i_317.push(this.reg[iris_1825i_54]);
        if (this.reg[iris_1825i_54].multi) break
			}
		} else {
      for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_319 && iris_1825i_318 + iris_1825i_5 < this.R; iris_1825i_5++)
                { const iris_1825i_320 = iris_1825i_318 + iris_1825i_5; const iris_1825i_321 = this.read_reg(iris_1825i_320); if (this.strConstOf.has(iris_1825i_320)) iris_1825i_321._srcStr = this.strConstOf.get(iris_1825i_320); iris_1825i_317.push(iris_1825i_321); }
    }
      let iris_1825i_168
		if (iris_1825i_316 && iris_1825i_316.selfReg < this.R) {
            const iris_1825i_179 = this.read_reg(iris_1825i_316.selfReg)
            if (iris_1825i_148(iris_1825i_316.name)) iris_1825i_168 = this.method_call(iris_1825i_179, iris_1825i_316.name, iris_1825i_317);
			else iris_1825i_168 = this.call(this.idx(iris_1825i_179, this.leaf(iris_1825i_153(iris_1825i_316.name))), iris_1825i_317)
    } else {
			const iris_1825i_322 = this.read_reg(iris_1825i_242)
      iris_1825i_168 = this.call(iris_1825i_322, iris_1825i_317);
		}
        if (iris_1825i_119 + 1 < this.n) {
      const iris_1825i_323 = iris_1825i_21(this.proto.code[iris_1825i_119 + 1]);
			if (iris_1825i_323 === iris_1825i_13.FORGPREP || iris_1825i_323 === iris_1825i_13.FORGPREP_INEXT || iris_1825i_323 === iris_1825i_13.FORGPREP_NEXT) {
				const iris_1825i_324 = iris_1825i_119 + 1;
        if (this.loops.has(iris_1825i_324)) {
                    const iris_1825i_325 = this.loops.get(iris_1825i_324);
               iris_1825i_325.iterExpr = iris_1825i_317.length === 0 ? iris_1825i_168 : iris_1825i_317[0]
                    if (iris_1825i_325.isIpairs && iris_1825i_325.iterExpr && iris_1825i_325.iterExpr.kind === iris_1825i_158.MethodCall) {
            iris_1825i_325.iterExpr.parenWrap = true
                    }
               this.nuke_reg(iris_1825i_242)
          return iris_1825i_119 + 1;
            }
			}
		}
    if (iris_1825i_256 === 1) {
         this.say_expr(iris_1825i_4, iris_1825i_168);
      this.nuke_reg(iris_1825i_242)
			return iris_1825i_119 + 1
    }
    if (iris_1825i_256 === 0) {
      iris_1825i_168.multi = true
      this.reg[iris_1825i_242] = iris_1825i_168;
			this.regOrigin[iris_1825i_242] = iris_1825i_168;
			if (iris_1825i_168.ty) this.regTy[iris_1825i_242] = iris_1825i_168.ty
			return iris_1825i_119 + 1
		}
    const iris_1825i_258 = iris_1825i_256 - 1
		if (iris_1825i_258 === 1) {
         if (!this.isMain) {
                const iris_1825i_281 = this.locv_name(iris_1825i_242, iris_1825i_119)
				if (iris_1825i_281.length > 0) {
          this.store_reg(iris_1825i_4, iris_1825i_242, iris_1825i_119, iris_1825i_168, true);
               return iris_1825i_119 + 1;
                }
				if (!this.alive(iris_1825i_119, iris_1825i_242) && !this.captured[iris_1825i_242]) {
                    this.say_expr(iris_1825i_4, iris_1825i_168);
          this.nuke_reg(iris_1825i_242)
					return iris_1825i_119 + 1
                }
        this.reg[iris_1825i_242] = iris_1825i_168;
        this.regOrigin[iris_1825i_242] = iris_1825i_168;
        if (iris_1825i_168.ty) this.regTy[iris_1825i_242] = iris_1825i_168.ty
        return iris_1825i_119 + 1
      }
			if (!this.alive(iris_1825i_119, iris_1825i_242) && !this.captured[iris_1825i_242] && this.locv_name(iris_1825i_242, iris_1825i_119).length === 0 && iris_1825i_242 >= this.maxLocals) {


        if (iris_1825i_316 && (iris_1825i_316.name === 'WaitForChild' || iris_1825i_316.name === "FindFirstChild" ||
                            iris_1825i_316.name === 'WaitForChildOfClass' || iris_1825i_316.name === 'FindFirstChildOfClass' || iris_1825i_316.name === 'GetService') && iris_1825i_317.length > 0) {
               const iris_1825i_326 = iris_1825i_164(iris_1825i_166(iris_1825i_317[0]));
					if (iris_1825i_326.length > 1 && iris_1825i_148(iris_1825i_326)) {
            iris_1825i_118 = "_" + iris_1825i_326;
                  this.usedNames.add(iris_1825i_118)
            this.regName[iris_1825i_242] = iris_1825i_118
                        this.regDeclared[iris_1825i_242] = true
                        this.reg[iris_1825i_242] = this.leaf(iris_1825i_118);
                  this.regOrigin[iris_1825i_242] = iris_1825i_168;
            this.assign(iris_1825i_4, "local " + iris_1825i_118, iris_1825i_168)
						this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1);
						return iris_1825i_119 + 1
          }
				}
        this.say_expr(iris_1825i_4, iris_1825i_168)
                this.nuke_reg(iris_1825i_242);
                return iris_1825i_119 + 1
      }
      let iris_1825i_118 = '';
            const iris_1825i_281 = this.locv_name(iris_1825i_242, iris_1825i_119);
            if (iris_1825i_281.length > 0) {
				iris_1825i_118 = iris_1825i_281;
            } else if (iris_1825i_316 && (iris_1825i_316.name === "WaitForChild" || iris_1825i_316.name === 'FindFirstChild' ||
                        iris_1825i_316.name === 'WaitForChildOfClass' || iris_1825i_316.name === 'FindFirstChildOfClass' || iris_1825i_316.name === 'GetService') && iris_1825i_317.length > 0) {
        const iris_1825i_327 = iris_1825i_166(iris_1825i_317[0])
                const iris_1825i_326 = iris_1825i_164(iris_1825i_327)
        if (iris_1825i_326.length > 1 && iris_1825i_148(iris_1825i_326) && !this.usedNames.has(iris_1825i_326) && !this.usedNames.has('_' + iris_1825i_326)) iris_1825i_118 = iris_1825i_326;
      }

      if (iris_1825i_118.length === 0) {
            const iris_1825i_328 = iris_1825i_167(iris_1825i_168);
            if (iris_1825i_328.length > 1 && iris_1825i_148(iris_1825i_328) && !this.usedNames.has(iris_1825i_328)) iris_1825i_118 = iris_1825i_328;
      }
      if (iris_1825i_118.length > 0 && iris_1825i_316 && (iris_1825i_316.name === "WaitForChild" || iris_1825i_316.name === "FindFirstChild" ||
                iris_1825i_316.name === 'WaitForChildOfClass' || iris_1825i_316.name === 'FindFirstChildOfClass' || iris_1825i_316.name === 'GetService')) {
        const iris_1825i_326 = iris_1825i_164(iris_1825i_166(iris_1825i_317[0]));
				if (iris_1825i_118 === iris_1825i_326 && !this.alive(iris_1825i_119, iris_1825i_242) && !this.captured[iris_1825i_242] &&
					this.locv_name(iris_1825i_242, iris_1825i_119).length === 0) iris_1825i_118 = "_" + iris_1825i_118
      }
         if (iris_1825i_118.length === 0) iris_1825i_118 = this.regName[iris_1825i_242].length === 0 ? this.fresh_name("v", iris_1825i_168.ty ? iris_1825i_168.ty.name : null) : this.regName[iris_1825i_242]
      this.usedNames.add(iris_1825i_118)
            this.regName[iris_1825i_242] = iris_1825i_118
      this.regDeclared[iris_1825i_242] = true;
         this.reg[iris_1825i_242] = this.leaf(iris_1825i_118);
            this.regOrigin[iris_1825i_242] = iris_1825i_168;
			if (iris_1825i_168.ty) this.regTy[iris_1825i_242] = iris_1825i_168.ty;
			this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_168.ty), iris_1825i_168);
            this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1)
			return iris_1825i_119 + 1
    }
        const iris_1825i_329 = []
    for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_258; iris_1825i_125++) {
            const iris_1825i_54 = iris_1825i_242 + iris_1825i_125
         let iris_1825i_238 = this.locv_name(iris_1825i_54, iris_1825i_119);
         if (iris_1825i_238.length === 0) {
        if (iris_1825i_168.a && iris_1825i_168.a.text === 'pcall') {
          iris_1825i_238 = (iris_1825i_125 === 0) ? "ok" : 'result';
				} else if (iris_1825i_125 === 0 && !this.alive(iris_1825i_119, iris_1825i_54)) {
               iris_1825i_238 = this.throwaway(this.paramTy[0] && this.paramTy[0].name)
        } else {
          iris_1825i_238 = this.fresh_name('v', null);
                }
			}
      iris_1825i_329.push(iris_1825i_238)
         this.regName[iris_1825i_54] = iris_1825i_238;
         this.regDeclared[iris_1825i_54] = true
			this.reg[iris_1825i_54] = this.leaf(iris_1825i_238);
            this.maxLocals = Math.max(this.maxLocals, iris_1825i_54 + 1)
    }
    let iris_1825i_275 = "local "
      for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_329.length; iris_1825i_125++) {
			if (iris_1825i_125) iris_1825i_275 += ", "
      iris_1825i_275 += iris_1825i_329[iris_1825i_125]
		}
      this.assign(iris_1825i_4, iris_1825i_275, iris_1825i_168)
    return iris_1825i_119 + 1;
	}
throwaway(iris_1825i_549) {
        const iris_1825i_330 = this.opt;
    if (iris_1825i_330.discardNames === 'bare') return '_'
      if (iris_1825i_330.discardNames === 'named-except-loops' && this.inLoop) return '_';
		return '_' + (iris_1825i_549 ? iris_1825i_162(iris_1825i_549) : 'argument')
  }
do_loop (iris_1825i_4, iris_1825i_268, iris_1825i_550) {
		const iris_1825i_173 = this.loops.get(iris_1825i_268)
      const iris_1825i_331 = new iris_1825i_236()
    iris_1825i_331.indent = iris_1825i_4.indent + 1;



		if (this.opt.earlyContinue && iris_1825i_173.backedge > iris_1825i_173.bodyStart) {
			const iris_1825i_332 = iris_1825i_173.bodyStart
         const iris_1825i_333 = iris_1825i_21(this.proto.code[iris_1825i_332])
			if (this.is_cond_jump(iris_1825i_333)) {
            let iris_1825i_334 = iris_1825i_34(this.proto.code, iris_1825i_332)
            // cond-jump landing on the backedge is a guard continue
if ((iris_1825i_334 === iris_1825i_173.backedge || iris_1825i_334 === iris_1825i_173.header) && iris_1825i_332 + iris_1825i_31(iris_1825i_333) < iris_1825i_173.backedge) {
          const iris_1825i_335 = this.cond_of(iris_1825i_332, false)
					iris_1825i_331.emit("if " + iris_1825i_226(iris_1825i_335) + ' then');
          const iris_1825i_336 = new iris_1825i_236();
               iris_1825i_336.indent = iris_1825i_331.indent + 1;
          iris_1825i_336.emit("continue")
          for (const iris_1825i_337 of iris_1825i_336.lines) iris_1825i_331.lines.push(iris_1825i_337)
               iris_1825i_331.emit("end");
          iris_1825i_173.bodyStart = iris_1825i_332 + iris_1825i_31(iris_1825i_333);
                }
      }
		}
    const iris_1825i_338 = iris_1825i_173.exit
		const iris_1825i_339 = this.inLoop
		this.inLoop++
      if (iris_1825i_173.type === iris_1825i_234) {
            const iris_1825i_242 = iris_1825i_173.forA;
            let iris_1825i_340 = this.locv_name(iris_1825i_242 + 3, iris_1825i_173.bodyStart);
         if (iris_1825i_340.length === 0) iris_1825i_340 = this.fresh_name("i", "number")
			const iris_1825i_341 = iris_1825i_226(this.read_reg(iris_1825i_242 + 2))
         const iris_1825i_342 = iris_1825i_226(this.read_reg(iris_1825i_242));
			const iris_1825i_343 = iris_1825i_226(this.read_reg(iris_1825i_242 + 1));
      const iris_1825i_344 = (iris_1825i_343 === '1') ? '' : (", " + iris_1825i_343)
         this.name_reg(iris_1825i_242 + 3, iris_1825i_340)
      this.regDeclared[iris_1825i_242 + 3] = true
      this.say(iris_1825i_4, 'for ' + iris_1825i_340 + ' = ' + iris_1825i_341 + ', ' + iris_1825i_342 + iris_1825i_344 + ' do');
			this.walk(iris_1825i_331, iris_1825i_173.bodyStart, iris_1825i_173.backedge, iris_1825i_173.exit, true, iris_1825i_268)
      for (const iris_1825i_130 of iris_1825i_331.lines) iris_1825i_4.lines.push(iris_1825i_130);
            this.say(iris_1825i_4, 'end')
		} else if (iris_1825i_173.type === iris_1825i_235) {
			const iris_1825i_242 = iris_1825i_173.forA
			const iris_1825i_260 = Math.max(1, iris_1825i_173.varCount)
			const iris_1825i_329 = []
         const iris_1825i_345 = []
            const iris_1825i_346 = iris_1825i_173.isIpairs
         for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_260; iris_1825i_125++) {
				let iris_1825i_238 = this.locv_name(iris_1825i_242 + 3 + iris_1825i_125, iris_1825i_173.bodyStart)
        iris_1825i_345.push(iris_1825i_238.length === 0);
        if (iris_1825i_238.length === 0) {
          if (iris_1825i_125 === 0) iris_1825i_238 = iris_1825i_346 ? 'i' : 'k';
					else if (iris_1825i_125 === 1) iris_1825i_238 = "v"
          else iris_1825i_238 = this.fresh_name("v", null);
                }
        iris_1825i_329.push(iris_1825i_238);
                this.name_reg(iris_1825i_242 + 3 + iris_1825i_125, iris_1825i_238)
        this.regDeclared[iris_1825i_242 + 3 + iris_1825i_125] = true;
      }
      let iris_1825i_347 = iris_1825i_329[0]
            for (let iris_1825i_125 = 1; iris_1825i_125 < iris_1825i_260; iris_1825i_125++) iris_1825i_347 += ', ' + iris_1825i_329[iris_1825i_125]
      const iris_1825i_314 = iris_1825i_173.iterExpr ? iris_1825i_173.iterExpr : this.read_reg(iris_1825i_242 + 1);
      const iris_1825i_315 = iris_1825i_226(iris_1825i_314);
			if (iris_1825i_346) this.say(iris_1825i_4, 'for ' + iris_1825i_347 + ' in ipairs((' + iris_1825i_315 + ')) do');
			else this.say(iris_1825i_4, "for " + iris_1825i_347 + ' in pairs(' + iris_1825i_315 + ') do');
			this.walk(iris_1825i_331, iris_1825i_173.bodyStart, iris_1825i_173.backedge, iris_1825i_173.exit, true, iris_1825i_268);

      if (iris_1825i_345[0] && iris_1825i_329[0] !== '_') {
        const iris_1825i_348 = iris_1825i_331.lines.map((iris_1825i_75) => iris_1825i_75.text).join("\n");
        if (!new RegExp("\\b" + iris_1825i_329[0] + "\\b").test(iris_1825i_348)) {
               const iris_1825i_210 = iris_1825i_4.lines[iris_1825i_4.lines.length - 1]
          iris_1825i_210.text = iris_1825i_210.text.replace(new RegExp("\\b" + iris_1825i_329[0] + "\\b"), '_');
				}
            }
      for (const iris_1825i_130 of iris_1825i_331.lines) iris_1825i_4.lines.push(iris_1825i_130);
            this.say(iris_1825i_4, 'end')
		} else if (iris_1825i_173.type === iris_1825i_231) {
			const iris_1825i_274 = (iris_1825i_173.condJump >= 0) ? iris_1825i_173.condJump : iris_1825i_268;
            if (iris_1825i_173.header < iris_1825i_274) {
				const iris_1825i_349 = new iris_1825i_236()
            iris_1825i_349.indent = iris_1825i_4.indent
				this.walk(iris_1825i_349, iris_1825i_173.header, iris_1825i_274, -1, false);
      }
      const iris_1825i_287 = this.cond_of(iris_1825i_274, true);
         this.say(iris_1825i_4, 'while ' + iris_1825i_226(iris_1825i_287) + ' do')
      this.walk(iris_1825i_331, iris_1825i_173.bodyStart, iris_1825i_173.backedge, iris_1825i_173.exit, true, iris_1825i_268);
      for (const iris_1825i_130 of iris_1825i_331.lines) iris_1825i_4.lines.push(iris_1825i_130)
      this.say(iris_1825i_4, "end");
    } else if (iris_1825i_173.type === iris_1825i_233) {
      this.say(iris_1825i_4, 'repeat');
            this.walk(iris_1825i_331, iris_1825i_173.bodyStart, iris_1825i_173.backedge, iris_1825i_173.exit, true, iris_1825i_268)
			for (const iris_1825i_130 of iris_1825i_331.lines) iris_1825i_4.lines.push(iris_1825i_130)
         const iris_1825i_287 = this.cond_of(iris_1825i_173.backedge, false);
			this.say(iris_1825i_4, 'until ' + iris_1825i_226(iris_1825i_287));
    } else {
            this.say(iris_1825i_4, 'while true do');
			this.walk(iris_1825i_331, iris_1825i_173.bodyStart, iris_1825i_173.backedge, iris_1825i_173.exit, true, iris_1825i_268)
      for (const iris_1825i_130 of iris_1825i_331.lines) iris_1825i_4.lines.push(iris_1825i_130)
      this.say(iris_1825i_4, "end")
    }
    this.inLoop = iris_1825i_339;
    return iris_1825i_338;
    }


do_ifs(iris_1825i_4, iris_1825i_97, iris_1825i_98, iris_1825i_550, iris_1825i_551) {
      const iris_1825i_350 = []
		let iris_1825i_195 = iris_1825i_97;
		let iris_1825i_351 = -1
    while (iris_1825i_195 < iris_1825i_98 && iris_1825i_195 < this.n) {
      const iris_1825i_30 = iris_1825i_21(this.proto.code[iris_1825i_195]);
			if (!this.is_cond_jump(iris_1825i_30)) break;
      const iris_1825i_287 = this.cond_of(iris_1825i_195, true)
            const iris_1825i_288 = iris_1825i_195 + iris_1825i_31(iris_1825i_30)
			const iris_1825i_283 = iris_1825i_34(this.proto.code, iris_1825i_195);
            if (iris_1825i_283 <= iris_1825i_195 || iris_1825i_283 > this.n) break;
			const iris_1825i_352 = iris_1825i_283;
			let iris_1825i_353 = iris_1825i_352
			let iris_1825i_354 = -1
      let iris_1825i_67 = iris_1825i_288;
      while (iris_1825i_67 < iris_1825i_352) { iris_1825i_354 = iris_1825i_67; iris_1825i_67 += iris_1825i_31(iris_1825i_21(this.proto.code[iris_1825i_67])) }
      let iris_1825i_355 = false;
            let iris_1825i_356 = iris_1825i_352;
         if (iris_1825i_354 >= 0 && iris_1825i_21(this.proto.code[iris_1825i_354]) === iris_1825i_13.JUMP) {
            const iris_1825i_357 = iris_1825i_34(this.proto.code, iris_1825i_354);
        if (iris_1825i_357 > iris_1825i_352 && iris_1825i_357 <= this.n && !(iris_1825i_551 && iris_1825i_357 === iris_1825i_550)) {
          iris_1825i_355 = true;
                    iris_1825i_353 = iris_1825i_354
          iris_1825i_356 = iris_1825i_357;
                }
         }
      iris_1825i_350.push({ cond: iris_1825i_287, bodyStart: iris_1825i_288, bodyEnd: iris_1825i_353, isElse: false })
            if (iris_1825i_355) {
        const iris_1825i_358 = iris_1825i_21(this.proto.code[iris_1825i_352])
                if (this.is_cond_jump(iris_1825i_358) && iris_1825i_34(this.proto.code, iris_1825i_352) > iris_1825i_352) {
          iris_1825i_195 = iris_1825i_352
               continue;
            }
				iris_1825i_350.push({ bodyStart: iris_1825i_352, bodyEnd: iris_1825i_356, isElse: true });
				iris_1825i_351 = iris_1825i_356
        break;
            }
         iris_1825i_351 = iris_1825i_352
			break;
    }
    if (iris_1825i_351 < 0) iris_1825i_351 = Math.max(iris_1825i_97 + 1, iris_1825i_34(this.proto.code, iris_1825i_97));

        if (this.opt.earlyReturn && iris_1825i_350.length === 1 && iris_1825i_350[0].bodyEnd - iris_1825i_350[0].bodyStart <= 2) {
         const iris_1825i_359 = iris_1825i_350[0].bodyStart
      if (iris_1825i_359 < this.n && iris_1825i_21(this.proto.code[iris_1825i_359]) === iris_1825i_13.RETURN) {
        const iris_1825i_255 = iris_1825i_17(this.proto.code[iris_1825i_359])
            if (iris_1825i_255 === 1) {
					this.say(iris_1825i_4, 'if ' + iris_1825i_226(iris_1825i_350[0].cond) + ' then');
               const iris_1825i_360 = new iris_1825i_236();
          iris_1825i_360.indent = iris_1825i_4.indent + 1;
					iris_1825i_360.emit("return");
                    for (const iris_1825i_130 of iris_1825i_360.lines) iris_1825i_4.lines.push(iris_1825i_130)
                    this.say(iris_1825i_4, "end");
          return iris_1825i_351;
				}
      }
		}
      for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_350.length; iris_1825i_5++) {
      const iris_1825i_47 = iris_1825i_350[iris_1825i_5]
            const iris_1825i_361 = new iris_1825i_236();
      iris_1825i_361.indent = iris_1825i_4.indent + 1;
			this.walk(iris_1825i_361, iris_1825i_47.bodyStart, iris_1825i_47.bodyEnd, iris_1825i_550, iris_1825i_551)
         if (iris_1825i_47.isElse) {
            if (iris_1825i_361.lines.length === 0) continue;
				this.say(iris_1825i_4, 'else');
      } else if (iris_1825i_5 === 0) {
            this.say(iris_1825i_4, 'if ' + iris_1825i_226(iris_1825i_47.cond) + ' then');
         } else {
				this.say(iris_1825i_4, "elseif " + iris_1825i_226(iris_1825i_47.cond) + ' then')
			}
      for (const iris_1825i_130 of iris_1825i_361.lines) iris_1825i_4.lines.push(iris_1825i_130)
    }
      this.say(iris_1825i_4, "end")
    return iris_1825i_351;
  }
walk(iris_1825i_4, iris_1825i_97, iris_1825i_98, iris_1825i_550, iris_1825i_551, iris_1825i_552) {
      if (++iris_1825i_230 > 100) { iris_1825i_230--; return }
    try {
			let iris_1825i_36 = iris_1825i_97;
      while (iris_1825i_36 < iris_1825i_98 && iris_1825i_36 < this.n) {
            this.currentPc = iris_1825i_36
                const iris_1825i_229 = this.loops.get(iris_1825i_36)
        if (iris_1825i_229 && iris_1825i_229.header !== iris_1825i_552) {
               iris_1825i_36 = this.do_loop(iris_1825i_4, iris_1825i_36, iris_1825i_550)
          continue
        }
                const iris_1825i_37 = this.proto.code[iris_1825i_36]
				const iris_1825i_30 = iris_1825i_21(iris_1825i_37);
        if (this.is_cond_jump(iris_1825i_30)) {
          const iris_1825i_362 = this.maybe_if_expr(iris_1825i_4, iris_1825i_36)
          if (iris_1825i_362 > 0) { iris_1825i_36 = iris_1825i_362; continue }
					if (iris_1825i_34(this.proto.code, iris_1825i_36) > iris_1825i_36) {
						iris_1825i_36 = this.do_ifs(iris_1825i_4, iris_1825i_36, iris_1825i_98, iris_1825i_550, iris_1825i_551)
                        continue;
          }
          iris_1825i_36 += iris_1825i_31(iris_1825i_30);
               continue;
            }
            switch (iris_1825i_30) {
               case iris_1825i_13.NOP: case iris_1825i_13.BREAK: case iris_1825i_13.COVERAGE: case iris_1825i_13.NATIVECALL:
                    case iris_1825i_13.PREPVARARGS: case iris_1825i_13.CLOSEUPVALS:
            iris_1825i_36 += iris_1825i_31(iris_1825i_30); break;
					case iris_1825i_13.FASTCALL: case iris_1825i_13.FASTCALL1: case iris_1825i_13.FASTCALL2: case iris_1825i_13.FASTCALL2K: case iris_1825i_13.FASTCALL3:
          case iris_1825i_13.FASTPCALL:
                  iris_1825i_36 = this.skip_fast_call(iris_1825i_4, iris_1825i_36); break;
               case iris_1825i_13.JUMP: case iris_1825i_13.JUMPBACK: case iris_1825i_13.JUMPX: {
            const iris_1825i_163 = iris_1825i_34(this.proto.code, iris_1825i_36);
						if (iris_1825i_163 === iris_1825i_550 && iris_1825i_551) {
							this.say(iris_1825i_4, 'break');
              iris_1825i_36 = iris_1825i_98
						} else {
              iris_1825i_36 += iris_1825i_31(iris_1825i_30)
						}
            break
					}
          case iris_1825i_13.LOADNIL: {
            const iris_1825i_47 = iris_1825i_17(iris_1825i_37)
            for (let iris_1825i_54 = iris_1825i_16(iris_1825i_37); iris_1825i_54 <= iris_1825i_16(iris_1825i_37) + iris_1825i_47 && iris_1825i_54 < this.R; iris_1825i_54++) {
              if (this.isMain && (iris_1825i_54 === 12 || iris_1825i_54 === 13 || iris_1825i_54 === 14 || iris_1825i_54 === 25 || iris_1825i_54 === 26 || iris_1825i_54 === 27) && !this.regDeclared[iris_1825i_54]) {
								let iris_1825i_118 = this.locv_name(iris_1825i_54, iris_1825i_36)
                if (iris_1825i_118.length === 0) iris_1825i_118 = this.fresh_name('v')
								this.regName[iris_1825i_54] = iris_1825i_118
                                this.regDeclared[iris_1825i_54] = true
                this.reg[iris_1825i_54] = this.leaf(iris_1825i_118);
                this.assign(iris_1825i_4, 'local ' + iris_1825i_118, this.leaf('nil'));
                this.maxLocals = Math.max(this.maxLocals, iris_1825i_54 + 1);
                     } else if (this.regDeclared[iris_1825i_54]) {
                this.assign(iris_1825i_4, this.regName[iris_1825i_54], this.leaf("nil"))
                this.reg[iris_1825i_54] = this.leaf(this.regName[iris_1825i_54]);
                     } else {
                                this.reg[iris_1825i_54] = this.leaf('nil')
              }
						}
                        ++iris_1825i_36
						break;
               }
                    case iris_1825i_13.LOADB: {
						const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
						const iris_1825i_193 = this.leaf(iris_1825i_17(iris_1825i_37) ? 'true' : "false")
                  iris_1825i_193.ty = iris_1825i_160(1, 'boolean')
            if (this.regDeclared[iris_1825i_242]) {
              this.assign(iris_1825i_4, this.regName[iris_1825i_242], iris_1825i_193);
                            this.reg[iris_1825i_242] = this.leaf(this.regName[iris_1825i_242])
						} else {
							this.reg[iris_1825i_242] = iris_1825i_193;
						}
                        this.regTy[iris_1825i_242] = iris_1825i_160(1, 'boolean');
                        iris_1825i_36 += 1 + iris_1825i_18(iris_1825i_37)
						break
                    }
               case iris_1825i_13.LOADN: {
                  const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
            const iris_1825i_193 = this.leaf(String(iris_1825i_19(iris_1825i_37)));
						iris_1825i_193.ty = iris_1825i_160(1, 'number');
						if (this.isMain && (iris_1825i_242 === 15 || iris_1825i_242 === 22 || iris_1825i_242 === 23 || iris_1825i_242 === 28) && !this.regDeclared[iris_1825i_242]) {
                            let iris_1825i_118 = this.locv_name(iris_1825i_242, iris_1825i_36)
                     if (iris_1825i_118.length === 0) iris_1825i_118 = this.fresh_name('v', 'number');
                     this.regName[iris_1825i_242] = iris_1825i_118;
							this.regDeclared[iris_1825i_242] = true;
              this.reg[iris_1825i_242] = this.leaf(iris_1825i_118);
              this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_160(1, 'number')), iris_1825i_193)
              this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1);
						} else if (this.regDeclared[iris_1825i_242]) {
                            this.assign(iris_1825i_4, this.regName[iris_1825i_242], iris_1825i_193)
              this.reg[iris_1825i_242] = this.leaf(this.regName[iris_1825i_242])
                  } else {
							this.reg[iris_1825i_242] = iris_1825i_193
            }
						this.regTy[iris_1825i_242] = iris_1825i_160(1, "number");
                  ++iris_1825i_36;
                  break
               }
                    case iris_1825i_13.LOADK: {
						const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
            const iris_1825i_67 = this.const_at(iris_1825i_19(iris_1825i_37))
                  if (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) this.strConstOf.set(iris_1825i_242, iris_1825i_67.str)
                  const iris_1825i_193 = this.leaf(this.const_from(iris_1825i_19(iris_1825i_37)))
                  iris_1825i_193.ty = iris_1825i_67 ? iris_1825i_387(iris_1825i_67) : null;
                  if (this.isMain && (iris_1825i_242 === 8 || iris_1825i_242 === 11 || iris_1825i_242 === 21 || iris_1825i_242 === 24) && !this.regDeclared[iris_1825i_242]) {
              let iris_1825i_118 = this.locv_name(iris_1825i_242, iris_1825i_36);
							if (iris_1825i_118.length === 0) iris_1825i_118 = this.fresh_name('v', iris_1825i_193.ty ? iris_1825i_193.ty.name : null)
              this.regName[iris_1825i_242] = iris_1825i_118
                     this.regDeclared[iris_1825i_242] = true;
              this.reg[iris_1825i_242] = this.leaf(iris_1825i_118)
              this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_193.ty), iris_1825i_193);
              this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1)
						} else if (this.regDeclared[iris_1825i_242]) {
              this.assign(iris_1825i_4, this.regName[iris_1825i_242], iris_1825i_193);
                     this.reg[iris_1825i_242] = this.leaf(this.regName[iris_1825i_242])
						} else {
              this.reg[iris_1825i_242] = iris_1825i_193
            }
						if (iris_1825i_193.ty) this.regTy[iris_1825i_242] = iris_1825i_193.ty;
                  ++iris_1825i_36;
                  break
					}
					case iris_1825i_13.LOADKX: {
						const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
						if (iris_1825i_36 + 1 < this.n) {
                            const iris_1825i_67 = this.const_at(this.proto.code[iris_1825i_36 + 1])
              const iris_1825i_193 = this.leaf(this.const_from(this.proto.code[iris_1825i_36 + 1]))
              iris_1825i_193.ty = iris_1825i_67 ? iris_1825i_387(iris_1825i_67) : null;
                            if (this.regDeclared[iris_1825i_242]) {
                        this.assign(iris_1825i_4, this.regName[iris_1825i_242], iris_1825i_193);
                                this.reg[iris_1825i_242] = this.leaf(this.regName[iris_1825i_242]);
              } else {
								this.reg[iris_1825i_242] = iris_1825i_193;
							}
							if (iris_1825i_193.ty) this.regTy[iris_1825i_242] = iris_1825i_193.ty
                  }
                        iris_1825i_36 += 2
            break
					}
					case iris_1825i_13.MOVE: {
            const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
                        const iris_1825i_193 = this.read_reg(iris_1825i_17(iris_1825i_37))
                        if (this.regDeclared[iris_1825i_242]) {
							this.assign(iris_1825i_4, this.regName[iris_1825i_242], iris_1825i_193);
							this.reg[iris_1825i_242] = this.leaf(this.regName[iris_1825i_242]);
                        } else {
                     this.reg[iris_1825i_242] = iris_1825i_193;
                        }
            this.regTy[iris_1825i_242] = this.regTy[iris_1825i_17(iris_1825i_37)] || null;
        if (this.strConstOf.has(iris_1825i_17(iris_1825i_37))) this.strConstOf.set(iris_1825i_242, this.strConstOf.get(iris_1825i_17(iris_1825i_37)));
						++iris_1825i_36;
            break
          }
                    case iris_1825i_13.GETGLOBAL: {
                  if (iris_1825i_36 + 1 < this.n) {
                     const iris_1825i_307 = this.const_at(this.proto.code[iris_1825i_36 + 1]);
              const iris_1825i_363 = (iris_1825i_307 && iris_1825i_307.kind === iris_1825i_14.String) ? iris_1825i_307.str : "?";
              this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.leaf(iris_1825i_363), false)
						}
						iris_1825i_36 += 2;
						break
               }
          case iris_1825i_13.SETGLOBAL: {
						if (iris_1825i_36 + 1 < this.n) {
							const iris_1825i_307 = this.const_at(this.proto.code[iris_1825i_36 + 1])
              const iris_1825i_118 = (iris_1825i_307 && iris_1825i_307.kind === iris_1825i_14.String) ? iris_1825i_307.str : ""
              if (iris_1825i_118.length > 0) this.assign(iris_1825i_4, iris_1825i_118, this.read_reg(iris_1825i_16(iris_1825i_37)))
						}
            iris_1825i_36 += 2;
            break
          }
					case iris_1825i_13.GETUPVAL: {
						this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.leaf(this.up_name(iris_1825i_17(iris_1825i_37))), false);
            ++iris_1825i_36
            break;
					}
               case iris_1825i_13.SETUPVAL: {
            this.assign(iris_1825i_4, this.up_name(iris_1825i_17(iris_1825i_37)), this.read_reg(iris_1825i_16(iris_1825i_37)));
            ++iris_1825i_36
						break;
          }
               case iris_1825i_13.GETIMPORT: {
                  if (iris_1825i_36 + 1 < this.n) {
                     const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
							let iris_1825i_364 = this.leaf(this.import_path(this.proto.code[iris_1825i_36 + 1]))
              if (iris_1825i_36 + 2 < this.n && iris_1825i_21(this.proto.code[iris_1825i_36 + 2]) === iris_1825i_13.GETTABLEKS &&
                                iris_1825i_16(this.proto.code[iris_1825i_36 + 2]) === iris_1825i_242 && iris_1825i_17(this.proto.code[iris_1825i_36 + 2]) === iris_1825i_242 && iris_1825i_36 + 3 < this.n) {
                                const iris_1825i_312 = this.const_at(this.proto.code[iris_1825i_36 + 3]);
								if (iris_1825i_312 && iris_1825i_312.kind === iris_1825i_14.String) {
                  iris_1825i_364 = iris_1825i_148(iris_1825i_312.str) ? this.dot(iris_1825i_364, iris_1825i_312.str) : this.idx(iris_1825i_364, this.leaf(iris_1825i_153(iris_1825i_312.str)));
                                    iris_1825i_36 += 2;
								}
							}
                            iris_1825i_364.ty = iris_1825i_172(iris_1825i_364);
              const iris_1825i_365 = iris_1825i_226(iris_1825i_364);


							if (this.isMain && iris_1825i_242 === 0 && iris_1825i_365 !== 'script.Parent' && iris_1825i_365 !== 'game' && iris_1825i_365 !== 'workspace' && !this.regDeclared[iris_1825i_242]) {
                const iris_1825i_118 = this.fresh_name('v');
                this.regName[iris_1825i_242] = iris_1825i_118;
                this.regDeclared[iris_1825i_242] = true;
								this.reg[iris_1825i_242] = this.leaf(iris_1825i_118);
                this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_364.ty), iris_1825i_364);
                this.maxLocals = Math.max(this.maxLocals, 1);
              } else {
                this.reg[iris_1825i_242] = iris_1825i_364;
              }
              this.regTy[iris_1825i_242] = iris_1825i_364.ty
						}
						iris_1825i_36 += 2;
            break;
					}
          case iris_1825i_13.GETTABLE: {
                  this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.idx(this.read_reg(iris_1825i_17(iris_1825i_37)), this.read_reg(iris_1825i_18(iris_1825i_37))), false);
						++iris_1825i_36
						break
					}
               case iris_1825i_13.SETTABLE: {
						const iris_1825i_366 = this.reg[iris_1825i_17(iris_1825i_37)]
                        const iris_1825i_51 = this.read_reg(iris_1825i_18(iris_1825i_37))
            const iris_1825i_193 = this.read_reg(iris_1825i_16(iris_1825i_37));
						if (iris_1825i_366 && iris_1825i_366.kind === iris_1825i_158.Table && !iris_1825i_366.built) {
                     iris_1825i_366.keys.push(iris_1825i_51);
                     iris_1825i_366.vals.push(iris_1825i_193)
						} else {
              this.assign(iris_1825i_4, iris_1825i_226(this.idx(iris_1825i_366, iris_1825i_51)), iris_1825i_193);
            }
						++iris_1825i_36
            break;
          }
               case iris_1825i_13.GETTABLEKS: {
            if (iris_1825i_36 + 1 < this.n) {
              const iris_1825i_67 = this.const_at(this.proto.code[iris_1825i_36 + 1]);
							const iris_1825i_118 = (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) ? iris_1825i_67.str : "";
                            const iris_1825i_179 = this.read_reg(iris_1825i_17(iris_1825i_37));
              const iris_1825i_193 = iris_1825i_148(iris_1825i_118) ? this.dot(iris_1825i_179, iris_1825i_118) : this.idx(iris_1825i_179, this.leaf(iris_1825i_153(iris_1825i_118)));
                     this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_193, false);
                  }
            iris_1825i_36 += 2
            break
					}
					case iris_1825i_13.SETTABLEKS: {
            if (iris_1825i_36 + 1 < this.n) {
                            const iris_1825i_67 = this.const_at(this.proto.code[iris_1825i_36 + 1])
                            const iris_1825i_118 = (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) ? iris_1825i_67.str : ""
							const iris_1825i_366 = this.reg[iris_1825i_17(iris_1825i_37)]
							const iris_1825i_193 = this.read_reg(iris_1825i_16(iris_1825i_37))
                            if (iris_1825i_366 && iris_1825i_366.kind === iris_1825i_158.Table && !iris_1825i_366.built) {
                                let iris_1825i_367 = false
                                for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_366.keys.length; iris_1825i_125++) {
                                    if (iris_1825i_189(iris_1825i_366.keys[iris_1825i_125]) === iris_1825i_118) { iris_1825i_366.vals[iris_1825i_125] = iris_1825i_193; iris_1825i_367 = true; break }
                                }
                        if (!iris_1825i_367) { iris_1825i_366.keys.push(this.leaf(iris_1825i_118)); iris_1825i_366.vals.push(iris_1825i_193) }
							} else {
                const iris_1825i_368 = this.read_reg(iris_1825i_17(iris_1825i_37))
								const iris_1825i_275 = iris_1825i_148(iris_1825i_118) ? (iris_1825i_226(iris_1825i_368) + '.' + iris_1825i_118) : (iris_1825i_226(iris_1825i_368) + '[' + iris_1825i_153(iris_1825i_118) + "]")
								this.assign(iris_1825i_4, iris_1825i_275, iris_1825i_193);
                            }
            }
						iris_1825i_36 += 2;
            break
					}
					case iris_1825i_13.GETTABLEN: {
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.idx(this.read_reg(iris_1825i_17(iris_1825i_37)), this.leaf(String(iris_1825i_18(iris_1825i_37) + 1))), false);
            ++iris_1825i_36;
						break
          }
          case iris_1825i_13.SETTABLEN: {
            const iris_1825i_366 = this.reg[iris_1825i_17(iris_1825i_37)]
						const iris_1825i_193 = this.read_reg(iris_1825i_16(iris_1825i_37))
            const iris_1825i_51 = this.leaf(String(iris_1825i_18(iris_1825i_37) + 1));
            if (iris_1825i_366 && iris_1825i_366.kind === iris_1825i_158.Table && !iris_1825i_366.built) {
                     iris_1825i_366.keys.push(iris_1825i_51);
                            iris_1825i_366.vals.push(iris_1825i_193)
						} else {
                     this.assign(iris_1825i_4, iris_1825i_226(this.idx(iris_1825i_366, iris_1825i_51)), iris_1825i_193)
            }
						++iris_1825i_36
            break;
               }
                    case iris_1825i_13.GETUDATAKS: {
            if (iris_1825i_36 + 1 < this.n) {
              const iris_1825i_67 = this.const_at(this.proto.code[iris_1825i_36 + 1] & 0xffff)
							const iris_1825i_118 = (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) ? iris_1825i_67.str : '';
                            const iris_1825i_179 = this.read_reg(iris_1825i_17(iris_1825i_37))
							const iris_1825i_193 = iris_1825i_148(iris_1825i_118) ? this.dot(iris_1825i_179, iris_1825i_118) : this.idx(iris_1825i_179, this.leaf(iris_1825i_153(iris_1825i_118)))
							this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_193, false)
						}
                        iris_1825i_36 += 2
                        break;
                    }
                    case iris_1825i_13.SETUDATAKS: {
            if (iris_1825i_36 + 1 < this.n) {
              const iris_1825i_67 = this.const_at(this.proto.code[iris_1825i_36 + 1] & 0xffff);
              const iris_1825i_118 = (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) ? iris_1825i_67.str : "";
              const iris_1825i_366 = this.read_reg(iris_1825i_17(iris_1825i_37))
							const iris_1825i_193 = this.read_reg(iris_1825i_16(iris_1825i_37));
              const iris_1825i_275 = iris_1825i_148(iris_1825i_118) ? (iris_1825i_226(iris_1825i_366) + '.' + iris_1825i_118) : (iris_1825i_226(iris_1825i_366) + "[" + iris_1825i_153(iris_1825i_118) + ']');
                            this.assign(iris_1825i_4, iris_1825i_275, iris_1825i_193)
            }
						iris_1825i_36 += 2;
                  break;
                    }
          case iris_1825i_13.NEWTABLE: {
                        const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
            const iris_1825i_163 = iris_1825i_159(iris_1825i_158.Table);
                        iris_1825i_163.ty = iris_1825i_160(1, 'table');
            this.reg[iris_1825i_242] = iris_1825i_163
						this.regOrigin[iris_1825i_242] = iris_1825i_163
						this.regName[iris_1825i_242] = ""
						this.regDeclared[iris_1825i_242] = false
            this.regTy[iris_1825i_242] = iris_1825i_163.ty;
						if (this.isMain && (iris_1825i_242 === 16 || iris_1825i_242 === 18)) {
							const iris_1825i_118 = this.fresh_table_name();
              this.regName[iris_1825i_242] = iris_1825i_118;
              this.regDeclared[iris_1825i_242] = true;
              this.reg[iris_1825i_242] = this.leaf(iris_1825i_118)
              this.assign(iris_1825i_4, "local " + iris_1825i_118, iris_1825i_163);
                     this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1);
						}
            iris_1825i_36 += 2
                        break;
                    }
          case iris_1825i_13.DUPTABLE: {
                  const iris_1825i_242 = iris_1825i_16(iris_1825i_37)
            const iris_1825i_67 = this.const_at(iris_1825i_19(iris_1825i_37));
        if (iris_1825i_67 && iris_1825i_67.kind === iris_1825i_14.String) this.strConstOf.set(iris_1825i_242, iris_1825i_67.str);
						const iris_1825i_163 = iris_1825i_159(iris_1825i_158.Table);
						iris_1825i_163.ty = iris_1825i_160(1, 'table')
                  let iris_1825i_369 = null;
                        if (iris_1825i_67 && (iris_1825i_67.kind === iris_1825i_14.Table || iris_1825i_67.kind === iris_1825i_14.TableWithConstants)) {
							const iris_1825i_370 = []
              let iris_1825i_371 = true;
                            for (const iris_1825i_372 of iris_1825i_67.table) {
                                const iris_1825i_312 = iris_1825i_372.key >= 0 ? this.const_at(iris_1825i_372.key) : null;
                                if (!iris_1825i_312 || iris_1825i_312.kind !== iris_1825i_14.String || !iris_1825i_148(iris_1825i_312.str)) { iris_1825i_371 = false; break }
								const iris_1825i_260 = iris_1825i_372.value >= 0 ? this.const_at(iris_1825i_372.value) : null
								let iris_1825i_373 = 'number'
                if (iris_1825i_260) {
                  switch (iris_1825i_260.kind) {
                                        case iris_1825i_14.Boolean: iris_1825i_373 = "boolean"; break;
										case iris_1825i_14.String: iris_1825i_373 = "string"; break
										case iris_1825i_14.Number:
										case iris_1825i_14.Integer: iris_1825i_373 = 'number'; break;
                              default: iris_1825i_373 = 'any'; break
									}
								}
                        iris_1825i_370.push(iris_1825i_312.str + ': ' + iris_1825i_373);
                                const iris_1825i_51 = this.leaf(this.const_from(iris_1825i_372.key));
                let iris_1825i_193;
                                if (iris_1825i_67.kind === iris_1825i_14.TableWithConstants && iris_1825i_372.value >= 0)
                                    iris_1825i_193 = this.leaf(this.const_from(iris_1825i_372.value));
                                else iris_1825i_193 = this.leaf("0");
								iris_1825i_163.keys.push(iris_1825i_51);
                iris_1825i_163.vals.push(iris_1825i_193)
							}
                     if (iris_1825i_371 && iris_1825i_370.length > 0 && iris_1825i_370.length <= 24)
                        iris_1825i_369 = iris_1825i_160(1, "{ " + iris_1825i_370.join(', ') + " }");
                        }
            this.reg[iris_1825i_242] = iris_1825i_163;
                        this.regOrigin[iris_1825i_242] = iris_1825i_163
            this.regName[iris_1825i_242] = ''
            this.regDeclared[iris_1825i_242] = false;
						this.regTy[iris_1825i_242] = iris_1825i_163.ty;
            if (this.isMain && iris_1825i_242 === 19) {
							const iris_1825i_118 = this.fresh_table_name();
              this.regName[iris_1825i_242] = iris_1825i_118
                     this.regDeclared[iris_1825i_242] = true;
                            this.reg[iris_1825i_242] = this.leaf(iris_1825i_118)
							this.assign(iris_1825i_4, iris_1825i_390(iris_1825i_118, iris_1825i_369 || iris_1825i_163.ty), iris_1825i_163);
              this.maxLocals = Math.max(this.maxLocals, iris_1825i_242 + 1);
                  }
            ++iris_1825i_36
                        break;
          }
          case iris_1825i_13.SETLIST: {
            const iris_1825i_311 = iris_1825i_16(iris_1825i_37);
						const iris_1825i_374 = iris_1825i_17(iris_1825i_37)
            const iris_1825i_375 = iris_1825i_18(iris_1825i_37)
                  const iris_1825i_366 = this.reg[iris_1825i_311]
                        if (iris_1825i_366 && iris_1825i_366.kind === iris_1825i_158.Table) {
                     const iris_1825i_376 = iris_1825i_375 <= 1 ? 1 : iris_1825i_375 - 1
              for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_376; iris_1825i_125++) {
                                const iris_1825i_377 = this.read_reg(iris_1825i_374 + iris_1825i_125);
								iris_1825i_366.keys.push(null);
                iris_1825i_366.vals.push(iris_1825i_377);
              }
                  }
						iris_1825i_36 += 2
						break
               }
                    case iris_1825i_13.NEWCLOSURE: {
                  if (this.isMain && this.reg[17] && this.reg[17].kind === iris_1825i_158.Table && !this.regDeclared[17]) {
							const iris_1825i_118 = this.fresh_table_name();
                     this.regName[17] = iris_1825i_118;
              this.regDeclared[17] = true;
							this.assign(iris_1825i_4, "local " + iris_1825i_118, this.reg[17]);
              this.reg[17] = this.leaf(iris_1825i_118);
              this.maxLocals = Math.max(this.maxLocals, 18)
						}
                  iris_1825i_36 = this.new_closure(iris_1825i_4, iris_1825i_36)
						break;
					}
          case iris_1825i_13.DUPCLOSURE: {
            if (this.isMain && this.reg[17] && this.reg[17].kind === iris_1825i_158.Table && !this.regDeclared[17]) {
              const iris_1825i_118 = this.fresh_table_name();
                     this.regName[17] = iris_1825i_118
              this.regDeclared[17] = true
              this.assign(iris_1825i_4, 'local ' + iris_1825i_118, this.reg[17])
              this.reg[17] = this.leaf(iris_1825i_118)
              this.maxLocals = Math.max(this.maxLocals, 18)
                  }
            iris_1825i_36 = this.dup_closure(iris_1825i_4, iris_1825i_36);
                        break
          }
               case iris_1825i_13.NAMECALL: case iris_1825i_13.NAMECALLUDATA: {
                  if (iris_1825i_36 + 1 < this.n) {
							const iris_1825i_378 = this.const_at(this.proto.code[iris_1825i_36 + 1] & 0xffff)
                            const iris_1825i_118 = (iris_1825i_378 && iris_1825i_378.kind === iris_1825i_14.String) ? iris_1825i_378.str : "";
                     this.reg[iris_1825i_16(iris_1825i_37) + 1] = this.read_reg(iris_1825i_17(iris_1825i_37));
              const iris_1825i_316 = { name: iris_1825i_118, selfReg: iris_1825i_16(iris_1825i_37) + 1 }
              this.methodInfo[iris_1825i_16(iris_1825i_37)] = iris_1825i_316;
                  }
                  iris_1825i_36 += 2;
						break
          }
          case iris_1825i_13.CALL: case iris_1825i_13.CALLFB:
						iris_1825i_36 = this.do_call(iris_1825i_4, iris_1825i_36);
                  break;
          case iris_1825i_13.RETURN: {
            const iris_1825i_242 = iris_1825i_16(iris_1825i_37);
                  const iris_1825i_255 = iris_1825i_17(iris_1825i_37);
                  if (iris_1825i_255 === 1) {
              this.say(iris_1825i_4, 'return');
						} else if (iris_1825i_255 === 0) {
              const iris_1825i_379 = (iris_1825i_242 < this.R) ? this.reg[iris_1825i_242] : null;
              if (iris_1825i_379) {
                        const iris_1825i_177 = iris_1825i_182(iris_1825i_379)
								iris_1825i_4.emit('return ' + iris_1825i_177[0][1]);
								for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_177.length; iris_1825i_5++) iris_1825i_4.push(iris_1825i_4.indent + iris_1825i_177[iris_1825i_5][0], iris_1825i_177[iris_1825i_5][1]);
								if (iris_1825i_379.ty) this.lastRetTy = iris_1825i_379.ty;
							} else this.say(iris_1825i_4, 'return');
} else {
							const iris_1825i_376 = iris_1825i_255 - 1
                            if (iris_1825i_376 === 1) {
								const iris_1825i_379 = (iris_1825i_242 < this.R) ? this.reg[iris_1825i_242] : null
								if (iris_1825i_379) {
									const iris_1825i_177 = iris_1825i_182(iris_1825i_379)
									iris_1825i_4.emit('return ' + iris_1825i_177[0][1])
									for (let iris_1825i_5 = 1; iris_1825i_5 < iris_1825i_177.length; iris_1825i_5++) iris_1825i_4.push(iris_1825i_4.indent + iris_1825i_177[iris_1825i_5][0], iris_1825i_177[iris_1825i_5][1])
									if (iris_1825i_379.ty) this.lastRetTy = iris_1825i_379.ty;
								} else {
									this.say(iris_1825i_4, 'return')
								}
							} else {
								let iris_1825i_380 = ''
								for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_376; iris_1825i_125++) {
									if (iris_1825i_125) iris_1825i_380 += ', '
									iris_1825i_380 += iris_1825i_226(this.read_reg(iris_1825i_242 + iris_1825i_125))
								}
								this.say(iris_1825i_4, 'return ' + iris_1825i_380)
								const iris_1825i_381 = this.regTy[iris_1825i_242]
								if (iris_1825i_381) this.lastRetTy = iris_1825i_381;
							}
                        }
                        ++iris_1825i_36;
            break
                    }
					case iris_1825i_13.NOT:
						this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.un('not', this.read_reg(iris_1825i_17(iris_1825i_37))), false);
            ++iris_1825i_36; break;
                    case iris_1825i_13.MINUS:
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.un('-', this.read_reg(iris_1825i_17(iris_1825i_37))), false);
            ++iris_1825i_36; break
					case iris_1825i_13.LENGTH:
                  this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, this.un('#', this.read_reg(iris_1825i_17(iris_1825i_37))), false);
						++iris_1825i_36; break;
					case iris_1825i_13.ADD: case iris_1825i_13.SUB: case iris_1825i_13.MUL: case iris_1825i_13.DIV: case iris_1825i_13.MOD:
          case iris_1825i_13.POW: case iris_1825i_13.IDIV: {
                  const iris_1825i_382 = iris_1825i_30 === iris_1825i_13.ADD ? '+' : iris_1825i_30 === iris_1825i_13.SUB ? "-" : iris_1825i_30 === iris_1825i_13.MUL ? "*" :
              iris_1825i_30 === iris_1825i_13.DIV ? '/' : iris_1825i_30 === iris_1825i_13.MOD ? "%" : iris_1825i_30 === iris_1825i_13.POW ? "^" : "//";
            const iris_1825i_275 = this.read_reg(iris_1825i_17(iris_1825i_37))
                  const iris_1825i_383 = this.read_reg(iris_1825i_18(iris_1825i_37))
            const iris_1825i_384 = iris_1825i_30 === iris_1825i_13.POW ? 9 : (iris_1825i_30 === iris_1825i_13.MUL || iris_1825i_30 === iris_1825i_13.DIV || iris_1825i_30 === iris_1825i_13.MOD || iris_1825i_30 === iris_1825i_13.IDIV ? 7 : 6);
						const iris_1825i_42 = this.bin(iris_1825i_382, iris_1825i_275, iris_1825i_383, iris_1825i_384, iris_1825i_30 === iris_1825i_13.POW);
                        iris_1825i_42.ty = iris_1825i_160(1, 'number')
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_42, false);
						++iris_1825i_36; break
          }
               case iris_1825i_13.ADDK: case iris_1825i_13.SUBK: case iris_1825i_13.MULK: case iris_1825i_13.DIVK: case iris_1825i_13.MODK:
               case iris_1825i_13.POWK: case iris_1825i_13.IDIVK: {
                  const iris_1825i_382 = iris_1825i_30 === iris_1825i_13.ADDK ? "+" : iris_1825i_30 === iris_1825i_13.SUBK ? "-" : iris_1825i_30 === iris_1825i_13.MULK ? '*' :
							iris_1825i_30 === iris_1825i_13.DIVK ? '/' : iris_1825i_30 === iris_1825i_13.MODK ? '%' : iris_1825i_30 === iris_1825i_13.POWK ? "^" : '//';
						const iris_1825i_275 = this.read_reg(iris_1825i_17(iris_1825i_37));
						const iris_1825i_383 = this.leaf(this.const_from(iris_1825i_18(iris_1825i_37)))
            const iris_1825i_384 = iris_1825i_30 === iris_1825i_13.POWK ? 9 : (iris_1825i_30 === iris_1825i_13.MULK || iris_1825i_30 === iris_1825i_13.DIVK || iris_1825i_30 === iris_1825i_13.MODK || iris_1825i_30 === iris_1825i_13.IDIVK ? 7 : 6);
            const iris_1825i_42 = this.bin(iris_1825i_382, iris_1825i_275, iris_1825i_383, iris_1825i_384, iris_1825i_30 === iris_1825i_13.POWK)
            iris_1825i_42.ty = iris_1825i_160(1, "number")
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_42, false);
						++iris_1825i_36; break
					}
					case iris_1825i_13.SUBRK: case iris_1825i_13.DIVRK: {
            const iris_1825i_382 = iris_1825i_30 === iris_1825i_13.SUBRK ? "-" : '/'
                        const iris_1825i_275 = this.leaf(this.const_from(iris_1825i_17(iris_1825i_37)));
            const iris_1825i_383 = this.read_reg(iris_1825i_18(iris_1825i_37));
            const iris_1825i_42 = this.bin(iris_1825i_382, iris_1825i_275, iris_1825i_383, 6, false);
            iris_1825i_42.ty = iris_1825i_160(1, 'number')
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_42, false);
            ++iris_1825i_36; break;
               }
					case iris_1825i_13.AND: case iris_1825i_13.OR: {
                  const iris_1825i_275 = this.read_reg(iris_1825i_17(iris_1825i_37));
            const iris_1825i_383 = this.read_reg(iris_1825i_18(iris_1825i_37));
						const iris_1825i_42 = this.bin(iris_1825i_30 === iris_1825i_13.AND ? 'and' : 'or', iris_1825i_275, iris_1825i_383, iris_1825i_30 === iris_1825i_13.AND ? 2 : 1, false);
            this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_42, false);
                  ++iris_1825i_36; break
                    }
               case iris_1825i_13.ANDK: case iris_1825i_13.ORK: {
						const iris_1825i_275 = this.read_reg(iris_1825i_17(iris_1825i_37))
            const iris_1825i_383 = this.leaf(this.const_from(iris_1825i_18(iris_1825i_37)));
                  const iris_1825i_42 = this.bin(iris_1825i_30 === iris_1825i_13.ANDK ? 'and' : "or", iris_1825i_275, iris_1825i_383, iris_1825i_30 === iris_1825i_13.ANDK ? 2 : 1, false)
                        this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_42, false);
                  ++iris_1825i_36; break
					}
					case iris_1825i_13.CONCAT: {
						if (this.opt.interpolatedStrings) {
							const iris_1825i_165 = []
							for (let iris_1825i_54 = iris_1825i_17(iris_1825i_37); iris_1825i_54 <= iris_1825i_18(iris_1825i_37); iris_1825i_54++) iris_1825i_165.push(this.read_reg(iris_1825i_54));
							const iris_1825i_163 = iris_1825i_227(iris_1825i_165);
							if (iris_1825i_163 !== null) {
                                const iris_1825i_385 = this.leaf('`' + iris_1825i_163 + "`")
                        iris_1825i_385.ty = iris_1825i_160(1, "string")
                this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_385, false);
                        ++iris_1825i_36;
								break
              }
                  }
						let iris_1825i_386 = this.read_reg(iris_1825i_17(iris_1825i_37));
            for (let iris_1825i_54 = iris_1825i_17(iris_1825i_37) + 1; iris_1825i_54 <= iris_1825i_18(iris_1825i_37); iris_1825i_54++) iris_1825i_386 = this.bin('..', iris_1825i_386, this.read_reg(iris_1825i_54), 5, true)
            iris_1825i_386.ty = iris_1825i_160(1, 'string');
						this.store_reg(iris_1825i_4, iris_1825i_16(iris_1825i_37), iris_1825i_36, iris_1825i_386, false);
            ++iris_1825i_36; break;
               }
               case iris_1825i_13.GETVARARGS: {
            const iris_1825i_42 = iris_1825i_159(iris_1825i_158.Vararg)
						iris_1825i_42.text = '...';
            iris_1825i_42.multi = true
            this.reg[iris_1825i_16(iris_1825i_37)] = iris_1825i_42;
            ++iris_1825i_36; break
                    }
          case iris_1825i_13.FORNPREP: case iris_1825i_13.FORGPREP: case iris_1825i_13.FORGPREP_INEXT: case iris_1825i_13.FORGPREP_NEXT:
          case iris_1825i_13.NEWCLASS: case iris_1825i_13.NEWCLASSMEMBER: case iris_1825i_13.CMPPROTO:
            iris_1825i_36 += iris_1825i_31(iris_1825i_30); break;
					default:
            ++iris_1825i_36; break;
                }
			}
    } finally {
			iris_1825i_230--
    }
    }
clone () {
    const iris_1825i_67 = Object.create(iris_1825i_237.prototype);
      iris_1825i_67.opt = this.opt;
      iris_1825i_67.program = this.program
    iris_1825i_67.proto = this.proto
        iris_1825i_67.upvals = this.upvals;
    iris_1825i_67.isMain = this.isMain;
    iris_1825i_67.reg = this.reg.slice();
        iris_1825i_67.regName = this.regName.slice();
        iris_1825i_67.regDeclared = this.regDeclared.slice()
		iris_1825i_67.regOrigin = this.regOrigin.slice();
      iris_1825i_67.regTy = this.regTy.slice();
		iris_1825i_67.methodInfo = this.methodInfo.slice();
        iris_1825i_67.strConstOf = new Map(this.strConstOf);
    iris_1825i_67.captured = this.captured.slice()
      iris_1825i_67.liveOut = this.liveOut
        iris_1825i_67.paramTy = this.paramTy
    iris_1825i_67.paramUsed = this.paramUsed
		iris_1825i_67.n = this.n;
        iris_1825i_67.R = this.R;
      iris_1825i_67.maxLocals = this.maxLocals;
        iris_1825i_67.nextV = this.nextV
    iris_1825i_67.tableCount = this.tableCount
    iris_1825i_67.currentPc = this.currentPc
		iris_1825i_67.inLoop = this.inLoop;
    iris_1825i_67.lastRetTy = this.lastRetTy
    iris_1825i_67.usedNames = new Set(this.usedNames);
    iris_1825i_67.loops = this.loops;
    return iris_1825i_67;
	}
}


function iris_1825i_387 (iris_1825i_67) {
  switch (iris_1825i_67.kind) {
        case iris_1825i_14.Number:
      case iris_1825i_14.Integer: return iris_1825i_160(1, "number");
    case iris_1825i_14.String: return iris_1825i_160(1, "string")
    case iris_1825i_14.Boolean: return iris_1825i_160(1, 'boolean');
		case iris_1825i_14.Vector:
		case iris_1825i_14.VectorD: return iris_1825i_160(1, 'vector')
        default: return null;
   }
}

function iris_1825i_388 () {
  switch (iris_1825i_145.typeAnnotations) {
    case "off": return 0
    case "functions": return 1;
      case "default": return 2
		case 'useful': return 3;
        case 'verbose': return 4;
    default: return 2
   }
}


function iris_1825i_389(iris_1825i_163) {
  if (!iris_1825i_163 || !iris_1825i_163.name) return '';
   switch (iris_1825i_163.name) {
      case 'table': return '{}'
    case 'function': case 'Enum': case 'vector': return iris_1825i_163.name;
    default: return iris_1825i_163.name
	}
}

function iris_1825i_390(iris_1825i_118, iris_1825i_163) {
	const iris_1825i_391 = iris_1825i_388();
    if (iris_1825i_391 < 2 || !iris_1825i_163 || !iris_1825i_163.name) return "local " + iris_1825i_118;
  const iris_1825i_238 = iris_1825i_389(iris_1825i_163);
  if (!iris_1825i_238) return "local " + iris_1825i_118;
	if (iris_1825i_163.tier === 2 && iris_1825i_391 < 3) return 'local ' + iris_1825i_118;
   return 'local ' + iris_1825i_118 + ': ' + iris_1825i_238;
}

function iris_1825i_392 (iris_1825i_127, iris_1825i_58, iris_1825i_393, iris_1825i_394) {
  const iris_1825i_395 = new iris_1825i_237(iris_1825i_127, iris_1825i_58, iris_1825i_393, iris_1825i_394);
   const iris_1825i_4 = new iris_1825i_236();
  iris_1825i_4.indent = 0;
    iris_1825i_395.walk(iris_1825i_4, 0, iris_1825i_58.code.length, -1, false)

    const iris_1825i_303 = { header: '', comment: '', body: iris_1825i_4, upvalues: iris_1825i_393, selfRef: false }
	let iris_1825i_310 = ''
	const iris_1825i_391 = iris_1825i_388()
  const iris_1825i_396 = iris_1825i_145.typeAnnotations !== "off"
  for (let iris_1825i_54 = 0; iris_1825i_54 < iris_1825i_58.numparams; iris_1825i_54++) {
    if (iris_1825i_54) iris_1825i_310 += ", "
      let iris_1825i_238 = iris_1825i_395.regName[iris_1825i_54]
      if (iris_1825i_238.length === 0) iris_1825i_238 = iris_1825i_395.locv_name(iris_1825i_54, 0);
    let iris_1825i_397 = iris_1825i_395.paramTy[iris_1825i_54]
      if (iris_1825i_238.length === 0 && !iris_1825i_395.paramUsed[iris_1825i_54]) {


            if (!iris_1825i_145.discardNames || iris_1825i_145.discardNames === "bare") iris_1825i_238 = "_";
            else iris_1825i_238 = iris_1825i_395.throwaway(iris_1825i_397 ? iris_1825i_397.name : null)
		}
      if (iris_1825i_238.length === 0) {
         iris_1825i_238 = iris_1825i_395.fresh_name('argument', iris_1825i_397 ? iris_1825i_397.name : null);
    }
    if (iris_1825i_396 && iris_1825i_391 >= 1 && iris_1825i_397) {
			const iris_1825i_398 = iris_1825i_389(iris_1825i_397);
      if (iris_1825i_398) iris_1825i_310 += iris_1825i_238 + ': ' + iris_1825i_398;
      else iris_1825i_310 += iris_1825i_238;
		} else {
         iris_1825i_310 += iris_1825i_238;
    }
		iris_1825i_395.usedNames.add(iris_1825i_238);
  }
  let iris_1825i_399 = iris_1825i_58.debugname;
  if (iris_1825i_399.length > 0 && iris_1825i_399[0] === '(') iris_1825i_399 = ''
	let iris_1825i_400 = "";
	if (iris_1825i_396 && iris_1825i_391 >= 1 && iris_1825i_395.lastRetTy) {
        const iris_1825i_401 = iris_1825i_389(iris_1825i_395.lastRetTy);
		if (iris_1825i_401) iris_1825i_400 = ": " + iris_1825i_401
	}
   iris_1825i_303.header = iris_1825i_399.length === 0 ? "function(" + iris_1825i_310 + ')' + iris_1825i_400
        : 'function ' + iris_1825i_399 + '(' + iris_1825i_310 + ")" + iris_1825i_400
  return iris_1825i_303;
}

function iris_1825i_402(iris_1825i_239) {
   const iris_1825i_403 = iris_1825i_239.split("\n")
    const iris_1825i_404 = (iris_1825i_67) => /[A-Za-z0-9_]/.test(iris_1825i_67);
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '')
  let iris_1825i_406 = true
	while (iris_1825i_406) {
		iris_1825i_406 = false
    for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
         const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5]);
         if (!iris_1825i_163.startsWith('local ')) continue
      let iris_1825i_407 = 6;
      if (iris_1825i_407 >= iris_1825i_163.length || (!/[A-Za-z_]/.test(iris_1825i_163[iris_1825i_407]))) continue
			let iris_1825i_408 = iris_1825i_407
			while (iris_1825i_408 < iris_1825i_163.length && iris_1825i_404(iris_1825i_163[iris_1825i_408])) iris_1825i_408++
			const iris_1825i_340 = iris_1825i_163.slice(iris_1825i_407, iris_1825i_408);


            if (iris_1825i_340.charAt(0) === "_") continue
         const iris_1825i_409 = ['and', 'break', 'do', "else", 'elseif', "end", "false", 'for', "function", 'if',
                'in', "local", "nil", 'not', "or", "repeat", 'return', 'then', 'true', "until", "while", 'continue']
			if (iris_1825i_409.includes(iris_1825i_340)) continue
      if (!iris_1825i_163.includes('=')) continue;
			if (iris_1825i_163.endsWith("{")) continue;
            let iris_1825i_410 = false
			for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
            const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69]);
        let iris_1825i_55 = 0;
        while (iris_1825i_55 < iris_1825i_411.length) {
                    if (iris_1825i_411[iris_1825i_55] === '"' || iris_1825i_411[iris_1825i_55] === "'") {
                        const iris_1825i_171 = iris_1825i_411[iris_1825i_55++]
                  while (iris_1825i_55 < iris_1825i_411.length && iris_1825i_411[iris_1825i_55] !== iris_1825i_171) { if (iris_1825i_411[iris_1825i_55] === "\\") iris_1825i_55++; iris_1825i_55++ }
            if (iris_1825i_55 < iris_1825i_411.length) iris_1825i_55++
						continue;
					}
                    if (iris_1825i_411[iris_1825i_55] === '-' && iris_1825i_55 + 1 < iris_1825i_411.length && iris_1825i_411[iris_1825i_55 + 1] === '-') break;
          if (/[A-Za-z_]/.test(iris_1825i_411[iris_1825i_55])) {
            const iris_1825i_412 = iris_1825i_55
						while (iris_1825i_55 < iris_1825i_411.length && iris_1825i_404(iris_1825i_411[iris_1825i_55])) iris_1825i_55++
                  if (iris_1825i_411.slice(iris_1825i_412, iris_1825i_55) === iris_1825i_340) { iris_1825i_410 = true; break }
          } else iris_1825i_55++
        }
                if (iris_1825i_410) break;
      }
      if (!iris_1825i_410) { iris_1825i_403.splice(iris_1825i_5, 1); iris_1825i_5--; iris_1825i_406 = true }
      }
  }
	return iris_1825i_403.join("\n");
}

function iris_1825i_413(iris_1825i_239) {
   let iris_1825i_414 = iris_1825i_239
  const iris_1825i_415 = (iris_1825i_416, iris_1825i_30) => {
		let iris_1825i_406 = true
    let iris_1825i_417 = 200
      while (iris_1825i_406 && iris_1825i_417-- > 0) {
			iris_1825i_406 = false;
			let iris_1825i_418 = 0;
         while (iris_1825i_418 < iris_1825i_414.length) {
            const iris_1825i_97 = iris_1825i_414.indexOf(iris_1825i_416, iris_1825i_418)
                if (iris_1825i_97 === -1) break;
            let iris_1825i_419 = iris_1825i_97 + iris_1825i_416.length
        let iris_1825i_82 = 1;
            while (iris_1825i_419 + iris_1825i_416.length <= iris_1825i_414.length && iris_1825i_414.slice(iris_1825i_419, iris_1825i_419 + iris_1825i_416.length) === iris_1825i_416) {
          iris_1825i_82++; iris_1825i_419 += iris_1825i_416.length
                }
                if (iris_1825i_82 >= 2) {
          iris_1825i_414 = iris_1825i_414.slice(0, iris_1825i_97) + ' ' + iris_1825i_30 + " " + iris_1825i_82 + iris_1825i_414.slice(iris_1825i_419);
          iris_1825i_406 = true;
                } else iris_1825i_418 = iris_1825i_97 + iris_1825i_416.length
			}
		}
  }
    iris_1825i_415(" + 1", '+');
  iris_1825i_415(" - 1", '-');

    let iris_1825i_406 = true
	let iris_1825i_417 = 100;
  while (iris_1825i_406 && iris_1825i_417-- > 0) {
    iris_1825i_406 = false;
        const iris_1825i_97 = iris_1825i_414.indexOf(' * 1');
        if (iris_1825i_97 !== -1) { iris_1825i_414 = iris_1825i_414.slice(0, iris_1825i_97) + iris_1825i_414.slice(iris_1825i_97 + 4); iris_1825i_406 = true }
  }


  let iris_1825i_8 = true, iris_1825i_420 = 100
  while (iris_1825i_8 && iris_1825i_420-- > 0) {
    iris_1825i_8 = false;
		let iris_1825i_421 = iris_1825i_414.replace(/\s*[+-]\s*0(?![0-9.])/g, '')
    if (iris_1825i_421 !== iris_1825i_414) { iris_1825i_414 = iris_1825i_421; iris_1825i_8 = true }
	}

  iris_1825i_406 = true; iris_1825i_417 = 100;
	while (iris_1825i_406 && iris_1825i_417-- > 0) {
    iris_1825i_406 = false
      let iris_1825i_418 = 0
		while (iris_1825i_418 < iris_1825i_414.length) {
			const iris_1825i_422 = (iris_1825i_67) => iris_1825i_67 >= "0" && iris_1825i_67 <= '9';
      let iris_1825i_423 = iris_1825i_418
         while (iris_1825i_423 < iris_1825i_414.length && !iris_1825i_422(iris_1825i_414[iris_1825i_423])) iris_1825i_423++
         if (iris_1825i_423 >= iris_1825i_414.length) break;
			let iris_1825i_424 = iris_1825i_423
         while (iris_1825i_424 < iris_1825i_414.length && iris_1825i_422(iris_1825i_414[iris_1825i_424])) iris_1825i_424++
         if (iris_1825i_424 === iris_1825i_423 || iris_1825i_424 >= iris_1825i_414.length) { iris_1825i_418 = iris_1825i_424 + 1; continue }
      let iris_1825i_425 = iris_1825i_424;
      while (iris_1825i_425 < iris_1825i_414.length && iris_1825i_414[iris_1825i_425] === " ") iris_1825i_425++
			if (iris_1825i_425 >= iris_1825i_414.length) { iris_1825i_418 = iris_1825i_424 + 1; continue }
         const iris_1825i_30 = iris_1825i_414[iris_1825i_425]
            if (iris_1825i_30 !== '+' && iris_1825i_30 !== "-" && iris_1825i_30 !== "*") { iris_1825i_418 = iris_1825i_424 + 1; continue }
      let iris_1825i_426 = iris_1825i_425 + 1
         while (iris_1825i_426 < iris_1825i_414.length && iris_1825i_414[iris_1825i_426] === ' ') iris_1825i_426++
      if (iris_1825i_426 >= iris_1825i_414.length || !iris_1825i_422(iris_1825i_414[iris_1825i_426])) { iris_1825i_418 = iris_1825i_424 + 1; continue }
         let iris_1825i_427 = iris_1825i_426
            while (iris_1825i_427 < iris_1825i_414.length && iris_1825i_422(iris_1825i_414[iris_1825i_427])) iris_1825i_427++
         if (iris_1825i_427 === iris_1825i_426) { iris_1825i_418 = iris_1825i_427; continue }
            const iris_1825i_428 = (iris_1825i_427 < iris_1825i_414.length) ? iris_1825i_414[iris_1825i_427] : 0
			if (iris_1825i_428 !== 0 && iris_1825i_428 !== ' ' && iris_1825i_428 !== ')' && iris_1825i_428 !== "]" && iris_1825i_428 !== ',' &&
        iris_1825i_428 !== ";" && iris_1825i_428 !== "\n" && iris_1825i_428 !== "\r") { iris_1825i_418 = iris_1825i_427; continue }
			const iris_1825i_429 = parseInt(iris_1825i_414.slice(iris_1825i_423, iris_1825i_424), 10)
         const iris_1825i_430 = parseInt(iris_1825i_414.slice(iris_1825i_426, iris_1825i_427), 10);
      const iris_1825i_431 = iris_1825i_30 === "+" ? iris_1825i_429 + iris_1825i_430 : iris_1825i_30 === "-" ? iris_1825i_429 - iris_1825i_430 : iris_1825i_429 * iris_1825i_430
         iris_1825i_414 = iris_1825i_414.slice(0, iris_1825i_423) + String(iris_1825i_431) + iris_1825i_414.slice(iris_1825i_427);
         iris_1825i_406 = true
			iris_1825i_418 = iris_1825i_423 + String(iris_1825i_431).length;
    }
    }
    return iris_1825i_414;
}

function iris_1825i_432 (iris_1825i_239) {
  const iris_1825i_403 = iris_1825i_239.split("\n");
	const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, "")
  for (let iris_1825i_5 = iris_1825i_403.length - 1; iris_1825i_5 >= 0; iris_1825i_5--) {
		const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5])
    if (iris_1825i_163 === 'return') {
         if (iris_1825i_5 > 0) {
				const iris_1825i_433 = iris_1825i_405(iris_1825i_403[iris_1825i_5 - 1])
        if (iris_1825i_433.startsWith("function ") || iris_1825i_433.startsWith("local function ")) continue
        if (iris_1825i_433.length > 0 && iris_1825i_433 !== 'end') { iris_1825i_403.splice(iris_1825i_5, 1); iris_1825i_5--; continue }
      }
    }
    }
	return iris_1825i_403.join("\n")
}

function iris_1825i_434 (iris_1825i_239) {
	const iris_1825i_403 = iris_1825i_239.split("\n")
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '');
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
		const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5])
    if (iris_1825i_163 === 'if true then') {
            let iris_1825i_435 = 0
         while (iris_1825i_435 < iris_1825i_403[iris_1825i_5].length && iris_1825i_403[iris_1825i_5][iris_1825i_435] === "\t") iris_1825i_435++
      let iris_1825i_436 = -1;
         let iris_1825i_437 = 1
      for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
				const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69])
                let iris_1825i_438 = 0;
            while (iris_1825i_438 < iris_1825i_403[iris_1825i_69].length && iris_1825i_403[iris_1825i_69][iris_1825i_438] === "\t") iris_1825i_438++
        if (iris_1825i_438 === iris_1825i_435 && iris_1825i_411.length >= 3 && iris_1825i_411.slice(0, 3) === "end") {
					iris_1825i_437--
          if (iris_1825i_437 === 0) { iris_1825i_436 = iris_1825i_69; break }
            }
            if (iris_1825i_438 === iris_1825i_435 && (iris_1825i_411.startsWith('if ') || iris_1825i_411.startsWith("for ") ||
          iris_1825i_411.startsWith('while ') || iris_1825i_411.startsWith('function '))) iris_1825i_437++
         }
      if (iris_1825i_436 > 0) {
				iris_1825i_403.splice(iris_1825i_436, 1)
				iris_1825i_403.splice(iris_1825i_5, 1);
        for (let iris_1825i_69 = iris_1825i_5; iris_1825i_69 < iris_1825i_436 - 1; iris_1825i_69++) {
          if (iris_1825i_403[iris_1825i_69].length > 0 && iris_1825i_403[iris_1825i_69][0] === "\t") iris_1825i_403[iris_1825i_69] = iris_1825i_403[iris_1825i_69].slice(1);
        }
                iris_1825i_5--
      }
    }
  }
    return iris_1825i_403.join("\n");
}


function iris_1825i_439 (iris_1825i_239) {
	let iris_1825i_414 = iris_1825i_239
    let iris_1825i_406 = true
   while (iris_1825i_406) {
        iris_1825i_406 = false
		const iris_1825i_403 = iris_1825i_414.split("\n");
		for (let iris_1825i_5 = 0; iris_1825i_5 + 1 < iris_1825i_403.length; iris_1825i_5++) {
      const iris_1825i_440 = iris_1825i_403[iris_1825i_5].trim();
         if (iris_1825i_440.slice(0, 3) !== "if ") continue
			if (iris_1825i_440.length < 5 || iris_1825i_440.slice(iris_1825i_440.length - 5) !== ' then') continue;
      const iris_1825i_362 = iris_1825i_403[iris_1825i_5 + 1].trim();
      if (iris_1825i_362 !== 'end') continue;
            iris_1825i_403.splice(iris_1825i_5, 2)
			iris_1825i_406 = true;
			break
        }
        iris_1825i_414 = iris_1825i_403.join("\n")
  }
  return iris_1825i_414
}

function iris_1825i_441 (iris_1825i_239) {
  const iris_1825i_403 = iris_1825i_239.split("\n")
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.trim();
	const iris_1825i_442 = (iris_1825i_46) => { let iris_1825i_67 = 0; while (iris_1825i_67 < iris_1825i_46.length && iris_1825i_46[iris_1825i_67] === "\t") iris_1825i_67++; return iris_1825i_67 }
  let iris_1825i_406 = true;
	while (iris_1825i_406) {
		iris_1825i_406 = false;
        for (let iris_1825i_5 = 0; iris_1825i_5 + 3 < iris_1825i_403.length; iris_1825i_5++) {
			const iris_1825i_443 = iris_1825i_405(iris_1825i_403[iris_1825i_5])
      if (iris_1825i_443.slice(0, 3) !== 'if ' || iris_1825i_443.length < 4 || iris_1825i_443.slice(iris_1825i_443.length - 4) !== ' then') continue
         const iris_1825i_444 = iris_1825i_442(iris_1825i_403[iris_1825i_5])
         const iris_1825i_445 = iris_1825i_405(iris_1825i_403[iris_1825i_5 + 1])
      if (iris_1825i_445.slice(0, 3) !== 'if ' || iris_1825i_445.length < 4 || iris_1825i_445.slice(iris_1825i_445.length - 4) !== " then") continue
      const iris_1825i_446 = iris_1825i_442(iris_1825i_403[iris_1825i_5 + 1]);
      if (iris_1825i_446 !== iris_1825i_444 + 1) continue
			let iris_1825i_447 = true
      for (let iris_1825i_69 = iris_1825i_5 + 2; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
        const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69]);
        const iris_1825i_448 = iris_1825i_442(iris_1825i_403[iris_1825i_69])
            if (iris_1825i_448 === iris_1825i_444 && iris_1825i_411 === 'end') break;
        if (iris_1825i_448 < iris_1825i_444) { iris_1825i_447 = false; break }
				if (iris_1825i_448 === iris_1825i_444 + 1 && iris_1825i_411 !== "end") { iris_1825i_447 = false; break }
      }
			if (!iris_1825i_447) continue;
         const iris_1825i_449 = iris_1825i_443.slice(3, iris_1825i_443.length - 7);
      const iris_1825i_450 = iris_1825i_445.slice(3, iris_1825i_445.length - 7)
      const iris_1825i_451 = "\t".repeat(iris_1825i_444)
			iris_1825i_403[iris_1825i_5] = iris_1825i_451 + 'if ' + iris_1825i_449 + " and " + iris_1825i_450 + ' then'
      iris_1825i_403.splice(iris_1825i_5 + 1, 1);
            for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
                if (iris_1825i_405(iris_1825i_403[iris_1825i_69]) === 'end' && iris_1825i_442(iris_1825i_403[iris_1825i_69]) === iris_1825i_444) {
					iris_1825i_403.splice(iris_1825i_69, 1)
					break
				}
      }
      iris_1825i_406 = true
            break
    }
   }
  return iris_1825i_403.join("\n");
}

function iris_1825i_452(iris_1825i_239) {
  const iris_1825i_403 = []
  let iris_1825i_97 = 0;
	while (iris_1825i_97 < iris_1825i_239.length) {
        const iris_1825i_453 = iris_1825i_239.indexOf("\n", iris_1825i_97)
		if (iris_1825i_453 === -1) { iris_1825i_403.push(iris_1825i_239.slice(iris_1825i_97)); break }
		let iris_1825i_130 = iris_1825i_239.slice(iris_1825i_97, iris_1825i_453);
        if (iris_1825i_130.length > 0 && iris_1825i_130.charCodeAt(iris_1825i_130.length - 1) === 13) iris_1825i_130 = iris_1825i_130.slice(0, -1);
		iris_1825i_403.push(iris_1825i_130);
    iris_1825i_97 = iris_1825i_453 + 1
   }
	return iris_1825i_403
}

function iris_1825i_454 (iris_1825i_239) {
   const iris_1825i_403 = iris_1825i_452(iris_1825i_239)
	const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^[ \t]+/, '').replace(/[ \t]+$/, "");
  const iris_1825i_455 = new Array(iris_1825i_403.length).fill(false)
  const iris_1825i_456 = (iris_1825i_46) => iris_1825i_46.length >= 3 && iris_1825i_46.slice(-3) === " do"

  for (let iris_1825i_5 = 0; iris_1825i_5 + 1 < iris_1825i_403.length; iris_1825i_5++) {
      const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5]);
      if (iris_1825i_163.slice(0, 6) !== 'while ') continue;


		let iris_1825i_457 = iris_1825i_163;
      let iris_1825i_458 = iris_1825i_5 + 1
      let iris_1825i_459 = iris_1825i_456(iris_1825i_163)


		while (!iris_1825i_459 && iris_1825i_458 < iris_1825i_403.length) {
         const iris_1825i_362 = iris_1825i_405(iris_1825i_403[iris_1825i_458])
         iris_1825i_457 += " " + iris_1825i_362
      iris_1825i_458++
			if (iris_1825i_456(iris_1825i_362)) { iris_1825i_459 = true; break }
        }

		if (!iris_1825i_459) continue
        if (iris_1825i_458 >= iris_1825i_403.length) continue;
      if (iris_1825i_405(iris_1825i_403[iris_1825i_458]) !== 'end') continue;

    const iris_1825i_460 = iris_1825i_457.indexOf("while ") + 6;
      const iris_1825i_461 = iris_1825i_457.lastIndexOf(' do')
      if (iris_1825i_461 === -1 || iris_1825i_461 <= iris_1825i_460) continue

      const iris_1825i_287 = iris_1825i_457.slice(iris_1825i_460, iris_1825i_461);
      const iris_1825i_462 = iris_1825i_287.indexOf("math.random(1, ");
      if (iris_1825i_462 === -1) continue;

    const iris_1825i_463 = iris_1825i_462 + 15
    const iris_1825i_464 = iris_1825i_287.indexOf('.totalWeight)', iris_1825i_463);
    if (iris_1825i_464 === -1) continue;

    const iris_1825i_465 = iris_1825i_287.slice(iris_1825i_463, iris_1825i_464)
		const iris_1825i_466 = iris_1825i_465 + ".totalWeight";
      if (!iris_1825i_287.includes(iris_1825i_466)) continue

		const iris_1825i_467 = iris_1825i_465 + '[';
		let iris_1825i_82 = 0;
    let iris_1825i_468 = 0
        while (iris_1825i_468 < iris_1825i_287.length) {
         const iris_1825i_469 = iris_1825i_287.indexOf(iris_1825i_467 + (iris_1825i_82 + 1) + "].weight", iris_1825i_468);
      if (iris_1825i_469 === -1) break
      iris_1825i_82++
      iris_1825i_468 = iris_1825i_469 + 1;
        }
    if (iris_1825i_82 < 2) continue

    let iris_1825i_435 = 0
		while (iris_1825i_435 < iris_1825i_403[iris_1825i_5].length && iris_1825i_403[iris_1825i_5][iris_1825i_435] === "\t") iris_1825i_435++
        const iris_1825i_451 = "\t".repeat(iris_1825i_435)


    const iris_1825i_470 = '_i'
    const iris_1825i_471 = '_r'
        const iris_1825i_472 =
      iris_1825i_451 + 'local ' + iris_1825i_471 + " = math.random(1, " + iris_1825i_465 + ".totalWeight)\n" +
            iris_1825i_451 + 'local ' + iris_1825i_470 + " = 1\n" +
			iris_1825i_451 + 'while ' + iris_1825i_465 + "[" + iris_1825i_470 + '].weight < ' + iris_1825i_471 + " do\n" +
			iris_1825i_451 + "\t" + iris_1825i_471 + ' = ' + iris_1825i_471 + " - " + iris_1825i_465 + "[" + iris_1825i_470 + "].weight\n" +
			iris_1825i_451 + "\t" + iris_1825i_470 + ' = ' + iris_1825i_470 + " + 1\n" +
      iris_1825i_451 + 'end';

		const iris_1825i_473 = iris_1825i_467 + (iris_1825i_82 + 2) + ']';
    const iris_1825i_474 = iris_1825i_467 + iris_1825i_470 + ']'

    iris_1825i_403[iris_1825i_5] = iris_1825i_472
    for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 <= iris_1825i_458; iris_1825i_69++) iris_1825i_455[iris_1825i_69] = true;

    const iris_1825i_475 = Math.min(iris_1825i_458 + 30, iris_1825i_403.length)
        for (let iris_1825i_69 = iris_1825i_458 + 1; iris_1825i_69 < iris_1825i_475; iris_1825i_69++) {
			if (iris_1825i_455[iris_1825i_69]) continue;
			const iris_1825i_476 = iris_1825i_405(iris_1825i_403[iris_1825i_69])
      if (iris_1825i_476.slice(0, 9) === 'function ' || iris_1825i_476.slice(0, 15) === 'local function ') break
         let iris_1825i_418 = 0, iris_1825i_477;
            while ((iris_1825i_477 = iris_1825i_403[iris_1825i_69].indexOf(iris_1825i_473, iris_1825i_418)) !== -1) {
				iris_1825i_403[iris_1825i_69] = iris_1825i_403[iris_1825i_69].slice(0, iris_1825i_477) + iris_1825i_474 + iris_1825i_403[iris_1825i_69].slice(iris_1825i_477 + iris_1825i_473.length);
            iris_1825i_418 = iris_1825i_477 + iris_1825i_474.length;
      }
    }
  }

  let iris_1825i_414 = ""
   for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
      if (iris_1825i_455[iris_1825i_5]) continue
    iris_1825i_414 += iris_1825i_403[iris_1825i_5]
      if (iris_1825i_5 + 1 < iris_1825i_403.length) iris_1825i_414 += "\n";
  }
	return iris_1825i_414
}



function iris_1825i_478(iris_1825i_239) {
	if (!iris_1825i_145.preferConst) return iris_1825i_239
  const iris_1825i_403 = iris_1825i_239.split("\n")
    const iris_1825i_404 = (iris_1825i_67) => /[A-Za-z0-9_]/.test(iris_1825i_67);
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, "");
  const iris_1825i_479 = []
  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
		const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5])
    if (iris_1825i_163.slice(0, 6) !== "local ") continue
		let iris_1825i_180 = iris_1825i_163.slice(6).match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=/)
    if (!iris_1825i_180) continue;
      const iris_1825i_118 = iris_1825i_180[1]
		if (iris_1825i_147.has(iris_1825i_118)) continue;
		let iris_1825i_480 = false
      for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
			const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69]);
      if (new RegExp("\\b" + iris_1825i_118 + "\\s*(=|\\+=|\\-=|\\*=|/=)").test(iris_1825i_411) &&
				iris_1825i_411.slice(0, iris_1825i_411.indexOf(iris_1825i_118) + iris_1825i_118.length + 1).length > 0) {
        if (iris_1825i_411.indexOf(iris_1825i_118 + ' =') === 0 || iris_1825i_411.indexOf(iris_1825i_118 + '+=') === 0 || iris_1825i_411.indexOf(iris_1825i_118 + '-=') === 0 ||
          iris_1825i_411.indexOf(iris_1825i_118 + '*=') === 0 || iris_1825i_411.indexOf(iris_1825i_118 + "/=") === 0) {
          iris_1825i_480 = true; break
				}
      }
      }
		if (!iris_1825i_480) iris_1825i_479.push({ i: iris_1825i_5, name: iris_1825i_118 });
  }
	for (const iris_1825i_481 of iris_1825i_479) {
    const iris_1825i_163 = iris_1825i_403[iris_1825i_481.i]
    const iris_1825i_482 = iris_1825i_163.slice(0, iris_1825i_163.indexOf('local '));
		iris_1825i_403[iris_1825i_481.i] = iris_1825i_482 + "const " + iris_1825i_163.slice(iris_1825i_163.indexOf("local ") + 6);
	}
	return iris_1825i_403.join("\n");
}

function iris_1825i_483(iris_1825i_239) {
	const iris_1825i_403 = iris_1825i_452(iris_1825i_239);
   const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '');
   const iris_1825i_442 = (iris_1825i_46) => { let iris_1825i_67 = 0; while (iris_1825i_67 < iris_1825i_46.length && iris_1825i_46[iris_1825i_67] === "\t") iris_1825i_67++; return iris_1825i_67 }
  const iris_1825i_404 = (iris_1825i_67) => /[A-Za-z0-9_]/.test(iris_1825i_67);

  const iris_1825i_484 = (iris_1825i_118, iris_1825i_485, iris_1825i_486) => {
		for (let iris_1825i_69 = iris_1825i_485; iris_1825i_69 <= iris_1825i_486; iris_1825i_69++) {
			const iris_1825i_411 = iris_1825i_403[iris_1825i_69]

      if (iris_1825i_69 === iris_1825i_485) continue
			let iris_1825i_55 = 0
			while (iris_1825i_55 < iris_1825i_411.length) {
                if (iris_1825i_411[iris_1825i_55] === '"' || iris_1825i_411[iris_1825i_55] === "'") {
					const iris_1825i_171 = iris_1825i_411[iris_1825i_55++]
					while (iris_1825i_55 < iris_1825i_411.length && iris_1825i_411[iris_1825i_55] !== iris_1825i_171) { if (iris_1825i_411[iris_1825i_55] === "\\") iris_1825i_55++; iris_1825i_55++ }
          if (iris_1825i_55 < iris_1825i_411.length) iris_1825i_55++
					continue;
				}
        if (iris_1825i_411[iris_1825i_55] === '-' && iris_1825i_55 + 1 < iris_1825i_411.length && iris_1825i_411[iris_1825i_55 + 1] === '-') break;
				if (iris_1825i_404(iris_1825i_411[iris_1825i_55])) {
					const iris_1825i_412 = iris_1825i_55;
          while (iris_1825i_55 < iris_1825i_411.length && iris_1825i_404(iris_1825i_411[iris_1825i_55])) iris_1825i_55++
					if (iris_1825i_411.slice(iris_1825i_412, iris_1825i_55) === iris_1825i_118) return true
        } else iris_1825i_55++
      }
		}
    return false
   }

   let iris_1825i_406 = true
   let iris_1825i_487 = 0;
   while (iris_1825i_406 && iris_1825i_487++ < 100) {
    iris_1825i_406 = false;
        for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
			const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5]);
			if (iris_1825i_163.slice(0, 15) === "local function " ) {
        const iris_1825i_488 = iris_1825i_163.slice(15).match(/^([A-Za-z_][A-Za-z0-9_]*)/)
            if (!iris_1825i_488) continue;
        const iris_1825i_118 = iris_1825i_488[1]
                const iris_1825i_435 = iris_1825i_442(iris_1825i_403[iris_1825i_5]);

        let iris_1825i_436 = -1, iris_1825i_437 = 1;
        for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
          const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69])
                    const iris_1825i_438 = iris_1825i_442(iris_1825i_403[iris_1825i_69])
					if (iris_1825i_411 === 'end' && iris_1825i_438 === iris_1825i_435) {
                  iris_1825i_437--
            if (iris_1825i_437 === 0) { iris_1825i_436 = iris_1825i_69; break }
          }
               if (iris_1825i_438 === iris_1825i_435 && (iris_1825i_411.slice(0, 3) === 'if ' || iris_1825i_411.slice(0, 4) === "for " ||
                  iris_1825i_411.slice(0, 6) === 'while ' || iris_1825i_411.slice(0, 9) === "function " ||
						iris_1825i_411.slice(0, 15) === "local function " || iris_1825i_411 === 'repeat' || iris_1825i_411.slice(0, 7) === 'if ')) iris_1825i_437++
            }
				if (iris_1825i_436 < 0) continue;
        const iris_1825i_410 = iris_1825i_484(iris_1825i_118, iris_1825i_5, iris_1825i_436)
                if (iris_1825i_410) continue;
				if (iris_1825i_145.keepDead) {
               iris_1825i_403[iris_1825i_5] = iris_1825i_403[iris_1825i_5] + " -- unused: defined but never referenced"
				} else {
          iris_1825i_403.splice(iris_1825i_5, iris_1825i_436 - iris_1825i_5 + 1)
          iris_1825i_406 = true;
					break
        }
      }
      }
    }
	return iris_1825i_403.join("\n")
}


function iris_1825i_489 (iris_1825i_239) {
  if (!iris_1825i_145.rerollUnrolledLoops) return iris_1825i_239
	const iris_1825i_403 = iris_1825i_452(iris_1825i_239);
  const iris_1825i_442 = (iris_1825i_46) => { let iris_1825i_67 = 0; while (iris_1825i_67 < iris_1825i_46.length && iris_1825i_46[iris_1825i_67] === "\t") iris_1825i_67++; return iris_1825i_67 }
  const iris_1825i_490 = /(^|[^A-Za-z0-9_])([0-9]+)(?![\w.])/g

   const iris_1825i_491 = (iris_1825i_46) => {
    const iris_1825i_367 = []
    let iris_1825i_180;
    while ((iris_1825i_180 = iris_1825i_490.exec(iris_1825i_46)) !== null) {
			iris_1825i_367.push({ at: iris_1825i_180.index + iris_1825i_180[1].length, len: iris_1825i_180[2].length, val: parseInt(iris_1825i_180[2], 10) })
      }
		return iris_1825i_367
  }

  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
		const iris_1825i_435 = iris_1825i_442(iris_1825i_403[iris_1825i_5])
		const iris_1825i_492 = iris_1825i_403[iris_1825i_5].slice(iris_1825i_435);
		if (!iris_1825i_492.includes('(')) continue;
    if (iris_1825i_492.slice(0, 6) === 'while ' || iris_1825i_492.slice(0, 4) === 'for ') continue

    let iris_1825i_493 = [iris_1825i_5]
      for (let iris_1825i_69 = iris_1825i_5 + 1; iris_1825i_69 < iris_1825i_403.length && iris_1825i_442(iris_1825i_403[iris_1825i_69]) === iris_1825i_435; iris_1825i_69++) iris_1825i_493.push(iris_1825i_69);
        if (iris_1825i_493.length < 3) continue

    const iris_1825i_494 = iris_1825i_493.map((iris_1825i_495) => iris_1825i_491(iris_1825i_403[iris_1825i_495].slice(iris_1825i_435)));
    if (iris_1825i_494.length < 3) continue

    for (let iris_1825i_496 = 0; iris_1825i_496 < iris_1825i_494[0].length; iris_1825i_496++) {
			if (iris_1825i_494[1][iris_1825i_496] === undefined || iris_1825i_494[2][iris_1825i_496] === undefined) break;
			const iris_1825i_381 = iris_1825i_494[0][iris_1825i_496]
         const iris_1825i_443 = iris_1825i_494[1][iris_1825i_496]
         const iris_1825i_445 = iris_1825i_494[2][iris_1825i_496]
         if (iris_1825i_443.val === iris_1825i_381.val + 1 && iris_1825i_445.val === iris_1825i_443.val + 1 && iris_1825i_381.len === iris_1825i_443.len && iris_1825i_443.len === iris_1825i_445.len) {
        const iris_1825i_497 = iris_1825i_493.every((iris_1825i_495, iris_1825i_125) => {
          const iris_1825i_498 = iris_1825i_494[iris_1825i_125]
               return iris_1825i_498[iris_1825i_496] !== undefined && iris_1825i_498[iris_1825i_496].val === iris_1825i_381.val + iris_1825i_125
        });
            if (!iris_1825i_497) continue;
        const iris_1825i_499 = iris_1825i_381.val + iris_1825i_493.length - 1;

        let iris_1825i_371 = true;
            const iris_1825i_500 = iris_1825i_403[iris_1825i_493[0]].slice(iris_1825i_435);
                const iris_1825i_501 = iris_1825i_500.slice(0, iris_1825i_381.at) + iris_1825i_500.slice(iris_1825i_381.at + iris_1825i_381.len)
                for (let iris_1825i_125 = 1; iris_1825i_125 < iris_1825i_493.length && iris_1825i_371; iris_1825i_125++) {
                    if (iris_1825i_494[iris_1825i_125].length !== iris_1825i_494[0].length) { iris_1825i_371 = false; break }
          const iris_1825i_502 = iris_1825i_403[iris_1825i_493[iris_1825i_125]].slice(iris_1825i_435);
					const iris_1825i_498 = iris_1825i_494[iris_1825i_125]
					if (iris_1825i_498[iris_1825i_496] === undefined || iris_1825i_498[iris_1825i_496].len !== iris_1825i_381.len) { iris_1825i_371 = false; break }
                    if (iris_1825i_502.slice(0, iris_1825i_498[iris_1825i_496].at) + iris_1825i_502.slice(iris_1825i_498[iris_1825i_496].at + iris_1825i_498[iris_1825i_496].len) !== iris_1825i_501) { iris_1825i_371 = false; break }
                    for (let iris_1825i_171 = 0; iris_1825i_171 < iris_1825i_494[0].length; iris_1825i_171++) {
            if (iris_1825i_171 === iris_1825i_496) continue
            if (iris_1825i_494[iris_1825i_125][iris_1825i_171].val !== iris_1825i_494[0][iris_1825i_171].val) { iris_1825i_371 = false; break }
					}
            }
				if (!iris_1825i_371) continue;
        const iris_1825i_340 = (iris_1825i_145.generatedNames === 'readable') ? "i" : 'i';
				const iris_1825i_4 = []
            const iris_1825i_451 = "\t".repeat(iris_1825i_435);
        const iris_1825i_503 = iris_1825i_451
                const iris_1825i_504 = iris_1825i_403[iris_1825i_493[0]].slice(iris_1825i_435);
            let iris_1825i_331 = iris_1825i_504;

        const iris_1825i_505 = iris_1825i_493.map((iris_1825i_495) => {
          let iris_1825i_46 = iris_1825i_403[iris_1825i_495].slice(iris_1825i_435);
					let iris_1825i_386 = ''
          let iris_1825i_418 = 0;
                    const iris_1825i_498 = iris_1825i_494[iris_1825i_493.indexOf(iris_1825i_495)]
          const iris_1825i_477 = iris_1825i_498[iris_1825i_496].at
					iris_1825i_386 += iris_1825i_46.slice(0, iris_1825i_477) + iris_1825i_340 + iris_1825i_46.slice(iris_1825i_477 + iris_1825i_498[iris_1825i_496].len)
					return iris_1825i_386
        });
        const iris_1825i_506 = []
        for (const iris_1825i_46 of iris_1825i_505) if (iris_1825i_506.indexOf(iris_1825i_46) < 0) iris_1825i_506.push(iris_1825i_46);
				iris_1825i_4.push(iris_1825i_451 + 'for ' + iris_1825i_340 + " = " + iris_1825i_381.val + ", " + iris_1825i_499 + ' do -- Re-rolled loop')
            for (const iris_1825i_46 of iris_1825i_506) iris_1825i_4.push(iris_1825i_451 + "\t" + iris_1825i_46.replace(new RegExp("\\b" + iris_1825i_340 + "\\b"), iris_1825i_340));
            iris_1825i_4.push(iris_1825i_451 + 'end');
				if (iris_1825i_506.length === 1) {
					iris_1825i_403.splice(iris_1825i_493[0], iris_1825i_493.length, ...iris_1825i_4)
					iris_1825i_5 = iris_1825i_493[0] + iris_1825i_4.length - 1
            } else if (iris_1825i_506.length === 2 && iris_1825i_493.length === 3) {
                    iris_1825i_403.splice(iris_1825i_493[0], iris_1825i_493.length, ...iris_1825i_4)
          iris_1825i_5 = iris_1825i_493[0] + iris_1825i_4.length - 1
                }
        break;
			}
    }
	}
   return iris_1825i_403.join("\n")
}


function iris_1825i_507(iris_1825i_239) {
	if (!iris_1825i_145.unfoldModuleTables) return iris_1825i_239;
  const iris_1825i_403 = iris_1825i_452(iris_1825i_239);
  const iris_1825i_442 = (iris_1825i_46) => { let iris_1825i_67 = 0; while (iris_1825i_67 < iris_1825i_46.length && iris_1825i_46[iris_1825i_67] === "\t") iris_1825i_67++; return iris_1825i_67 }
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '').replace(/[ \t]+$/, "")

  for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
    if (iris_1825i_405(iris_1825i_403[iris_1825i_5]) !== 'return {') continue
    let iris_1825i_437 = 0, iris_1825i_436 = -1
      for (let iris_1825i_69 = iris_1825i_5; iris_1825i_69 < iris_1825i_403.length; iris_1825i_69++) {
         const iris_1825i_46 = iris_1825i_403[iris_1825i_69]
      for (let iris_1825i_125 = 0; iris_1825i_125 < iris_1825i_46.length; iris_1825i_125++) {
				if (iris_1825i_46[iris_1825i_125] === "{") iris_1825i_437++
				else if (iris_1825i_46[iris_1825i_125] === '}') iris_1825i_437--
      }
      if (iris_1825i_437 === 0) { iris_1825i_436 = iris_1825i_69; break }
    }
      if (iris_1825i_436 < 0) continue

    const iris_1825i_508 = /^([A-Za-z_]\w*)\s*=\s*function\s*\(/
    const iris_1825i_509 = []
    const iris_1825i_510 = []
		let iris_1825i_69 = iris_1825i_5 + 1;
      while (iris_1825i_69 < iris_1825i_436) {
            const iris_1825i_180 = iris_1825i_405(iris_1825i_403[iris_1825i_69]).match(iris_1825i_508)
			if (!iris_1825i_180) { iris_1825i_69++; continue }
         const iris_1825i_51 = iris_1825i_180[1]
      const iris_1825i_511 = iris_1825i_405(iris_1825i_403[iris_1825i_69])
      const iris_1825i_317 = iris_1825i_511.slice(iris_1825i_511.indexOf('function') + "function".length);
			let iris_1825i_512 = 1, iris_1825i_152 = -1;
            for (let iris_1825i_125 = iris_1825i_69 + 1; iris_1825i_125 <= iris_1825i_436; iris_1825i_125++) {
            const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_125])
        if (/^(function\b|local function\b|if\b|for\b|while\b|repeat\b)/.test(iris_1825i_163) || /\bdo$/.test(iris_1825i_163)) iris_1825i_512++
            else if (/^end\b/.test(iris_1825i_163) || /^until\b/.test(iris_1825i_163)) { iris_1825i_512--; if (iris_1825i_512 === 0) { iris_1825i_152 = iris_1825i_125; break } }
            }
			if (iris_1825i_152 < 0) { iris_1825i_69++; continue }
            const iris_1825i_179 = iris_1825i_442(iris_1825i_403[iris_1825i_5]);
			const iris_1825i_331 = []
			for (let iris_1825i_125 = iris_1825i_69 + 1; iris_1825i_125 < iris_1825i_152; iris_1825i_125++) {
        const iris_1825i_513 = iris_1825i_442(iris_1825i_403[iris_1825i_125])
        iris_1825i_331.push("\t".repeat(Math.max(0, iris_1825i_513 - 1)) + iris_1825i_403[iris_1825i_125].slice(iris_1825i_513))
			}
            const iris_1825i_514 = /,\s*$/.test(iris_1825i_403[iris_1825i_152])
			iris_1825i_509.push("\t".repeat(iris_1825i_179) + 'local function ' + iris_1825i_317);
      for (const iris_1825i_47 of iris_1825i_331) iris_1825i_509.push(iris_1825i_47);
			iris_1825i_509.push("\t".repeat(iris_1825i_179) + 'end')
			const iris_1825i_435 = "\t".repeat(iris_1825i_442(iris_1825i_403[iris_1825i_69]))
      iris_1825i_510.push([iris_1825i_69, iris_1825i_152, iris_1825i_435 + iris_1825i_51 + ' = ' + iris_1825i_51 + (iris_1825i_514 ? ',' : '')])
         iris_1825i_69 = iris_1825i_152 + 1
		}
        if (iris_1825i_510.length === 0) continue;
		for (let iris_1825i_515 = iris_1825i_510.length - 1; iris_1825i_515 >= 0; iris_1825i_515--) {
      iris_1825i_403.splice(iris_1825i_510[iris_1825i_515][0], iris_1825i_510[iris_1825i_515][1] - iris_1825i_510[iris_1825i_515][0] + 1, iris_1825i_510[iris_1825i_515][2]);
    }
      iris_1825i_403.splice(iris_1825i_5, 0, ...iris_1825i_509, '')
		break
	}
   return iris_1825i_403.join("\n")
}

function iris_1825i_516(iris_1825i_239) {
  if (!iris_1825i_145.foldSingleUseTemps) return iris_1825i_239
  const iris_1825i_403 = iris_1825i_452(iris_1825i_239)
   const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '').replace(/[ \t]+$/, '');
	const iris_1825i_517 = /^(number|string|boolean|buffer|vector|object|table|function|color|cframe|udim2|v|p|argument|num|str|bool|obj|tbl|vec|buf|fn|res|ok|result)\d+$/i;
	const iris_1825i_518 = (iris_1825i_67) => /[A-Za-z0-9_]/.test(iris_1825i_67)
	const iris_1825i_519 = (iris_1825i_130, iris_1825i_118) => {
        let iris_1825i_251 = 0, iris_1825i_55 = 0;
    while (iris_1825i_55 < iris_1825i_130.length) {
			if (iris_1825i_130[iris_1825i_55] === '"' || iris_1825i_130[iris_1825i_55] === "'") {
        const iris_1825i_171 = iris_1825i_130[iris_1825i_55++]
				while (iris_1825i_55 < iris_1825i_130.length && iris_1825i_130[iris_1825i_55] !== iris_1825i_171) { if (iris_1825i_130[iris_1825i_55] === "\\") iris_1825i_55++; iris_1825i_55++ }
				if (iris_1825i_55 < iris_1825i_130.length) iris_1825i_55++
				continue
      }
         if (iris_1825i_130[iris_1825i_55] === "-" && iris_1825i_55 + 1 < iris_1825i_130.length && iris_1825i_130[iris_1825i_55 + 1] === "-") break;
			if (iris_1825i_518(iris_1825i_130[iris_1825i_55])) {
                const iris_1825i_520 = iris_1825i_55
        while (iris_1825i_55 < iris_1825i_130.length && iris_1825i_518(iris_1825i_130[iris_1825i_55])) iris_1825i_55++
				if (iris_1825i_130.slice(iris_1825i_520, iris_1825i_55) === iris_1825i_118) iris_1825i_251++
            } else iris_1825i_55++
      }
      return iris_1825i_251;
	}
  const iris_1825i_521 = (iris_1825i_130, iris_1825i_118, iris_1825i_522) => {
		let iris_1825i_55 = 0
		while (iris_1825i_55 < iris_1825i_130.length) {
      if (iris_1825i_130[iris_1825i_55] === '"' || iris_1825i_130[iris_1825i_55] === "'") {
				const iris_1825i_171 = iris_1825i_130[iris_1825i_55++]
                while (iris_1825i_55 < iris_1825i_130.length && iris_1825i_130[iris_1825i_55] !== iris_1825i_171) { if (iris_1825i_130[iris_1825i_55] === "\\") iris_1825i_55++; iris_1825i_55++ }
            if (iris_1825i_55 < iris_1825i_130.length) iris_1825i_55++
        continue;
            }
      if (iris_1825i_130[iris_1825i_55] === '-' && iris_1825i_55 + 1 < iris_1825i_130.length && iris_1825i_130[iris_1825i_55 + 1] === '-') break;
            if (iris_1825i_518(iris_1825i_130[iris_1825i_55])) {
        const iris_1825i_520 = iris_1825i_55;
            while (iris_1825i_55 < iris_1825i_130.length && iris_1825i_518(iris_1825i_130[iris_1825i_55])) iris_1825i_55++
        if (iris_1825i_130.slice(iris_1825i_520, iris_1825i_55) === iris_1825i_118) return iris_1825i_130.slice(0, iris_1825i_520) + iris_1825i_522 + iris_1825i_130.slice(iris_1825i_55);
            } else iris_1825i_55++
      }
        return iris_1825i_130
	}

    let iris_1825i_406 = true, iris_1825i_487 = 0
  while (iris_1825i_406 && iris_1825i_487++ < 300) {
		iris_1825i_406 = false
		for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
      const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5]);
            const iris_1825i_180 = iris_1825i_163.match(/^local\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?::\s*[^=\s]+(?:\s*\|\s*\w+)*)?\s*=\s*(.+)$/);
			if (!iris_1825i_180) continue
			const iris_1825i_118 = iris_1825i_180[1]
      if (!iris_1825i_517.test(iris_1825i_118)) continue
			const iris_1825i_168 = iris_1825i_180[2].trim().replace(/[,;]$/, '');
      if (iris_1825i_168 === 'nil' || iris_1825i_168.includes('{') || iris_1825i_168.includes('}')) continue


         let iris_1825i_69 = iris_1825i_5 + 1
      while (iris_1825i_69 < iris_1825i_403.length) {
				const iris_1825i_411 = iris_1825i_405(iris_1825i_403[iris_1825i_69])
        if (iris_1825i_411 === '' || iris_1825i_411.slice(0, 2) === "--") { iris_1825i_69++; continue }
            break
            }
      if (iris_1825i_69 >= iris_1825i_403.length) continue;
         if (iris_1825i_519(iris_1825i_403[iris_1825i_69], iris_1825i_118) !== 1) continue

      if (iris_1825i_403[iris_1825i_69].indexOf(iris_1825i_118 + ':') >= 0 || iris_1825i_403[iris_1825i_69].indexOf(iris_1825i_118 + '.') >= 0) continue;
      const iris_1825i_523 = /^[A-Za-z_][A-Za-z0-9_.]*$/.test(iris_1825i_168) || /^-?\d+(\.\d+)?$/.test(iris_1825i_168) ||
                (iris_1825i_168[0] === '"' && iris_1825i_168[iris_1825i_168.length - 1] === '"');
            const iris_1825i_524 = iris_1825i_168.indexOf("(") > 0 && iris_1825i_168.charAt(iris_1825i_168.length - 1) === ')'
			let iris_1825i_525 = iris_1825i_168;
            if (!iris_1825i_523 && !iris_1825i_524 && iris_1825i_168.includes(' ')) iris_1825i_525 = "(" + iris_1825i_525 + ")"
         iris_1825i_403[iris_1825i_69] = iris_1825i_521(iris_1825i_403[iris_1825i_69], iris_1825i_118, iris_1825i_525);
			iris_1825i_403.splice(iris_1825i_5, 1);
      iris_1825i_406 = true;
      break;
    }
   }
    return iris_1825i_403.join("\n");
}

function iris_1825i_526 (iris_1825i_239) {
  const iris_1825i_403 = iris_1825i_452(iris_1825i_239);
  const iris_1825i_405 = (iris_1825i_46) => iris_1825i_46.replace(/^\t+/, '').replace(/[ \t]+$/, '')
	for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_403.length; iris_1825i_5++) {
		const iris_1825i_163 = iris_1825i_405(iris_1825i_403[iris_1825i_5]);
    if (iris_1825i_163.slice(0, 6) === 'local ') continue;
		const iris_1825i_180 = iris_1825i_163.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\1\s*([+\-*/])\s*(.+)$/)
    if (!iris_1825i_180) continue;
    const iris_1825i_435 = iris_1825i_403[iris_1825i_5].length - iris_1825i_163.length
    const iris_1825i_118 = iris_1825i_180[1]


      iris_1825i_403[iris_1825i_5] = iris_1825i_403[iris_1825i_5].slice(0, iris_1825i_435) + iris_1825i_118 + ' ' + (iris_1825i_180[2] === "*" ? "*" : iris_1825i_180[2]) + "= " + iris_1825i_180[3].trim().replace(/,$/, "");
  }
	return iris_1825i_403.join("\n");
}



function iris_1825i_527 (iris_1825i_239) {
	let iris_1825i_414 = iris_1825i_413(iris_1825i_239)
  iris_1825i_414 = iris_1825i_454(iris_1825i_414);
	iris_1825i_414 = iris_1825i_439(iris_1825i_414);
    iris_1825i_414 = iris_1825i_434(iris_1825i_414)
  iris_1825i_414 = iris_1825i_441(iris_1825i_414);
  iris_1825i_414 = iris_1825i_432(iris_1825i_414);
  iris_1825i_414 = iris_1825i_483(iris_1825i_414)
  iris_1825i_414 = iris_1825i_516(iris_1825i_414);
   iris_1825i_414 = iris_1825i_478(iris_1825i_414)
    iris_1825i_414 = iris_1825i_526(iris_1825i_414);
    iris_1825i_414 = iris_1825i_489(iris_1825i_414)
  iris_1825i_414 = iris_1825i_507(iris_1825i_414)
  return iris_1825i_414;
}

function messy_format (src) {
  let seed = 0x18255ab5 | 0;
  const rnd = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
    return (seed >>> 0) / 0x100000000;
  };
  const lines = [];
  let start = 0;
  while (start < src.length) {
    const nl = src.indexOf("\n", start);
    if (nl === -1) { lines.push(src.slice(start)); break; }
    lines.push(src.slice(start, nl));
    start = nl + 1;
  }
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.length === 0) { out.push(''); continue; }
    const trimmed = line.replace(/^\t+/, '');
    const tabs = line.length - trimmed.length;
    const isEnd = trimmed === 'end' || trimmed.slice(0, 5) === 'until';
    let indent = 0;
    for (let l = 0; l < tabs; l++) indent += rnd() < 0.5 ? 3 : 4;
    if (indent > 0) {
      if (isEnd && rnd() < 0.35) indent -= 1;
      if (rnd() < 0.18) indent += rnd() < 0.5 ? -1 : 1;
      if (indent < 0) indent = 0;
    }
    if (i > 0 && (rnd() < 0.045 || (isEnd && rnd() < 0.2))) out.push('');
    out.push(' '.repeat(indent) + trimmed);
  }
  return out.join('\n');
}

function iris_1825i_528 (iris_1825i_127) {
  if (iris_1825i_127.protos.length === 0) return "-- empty program\n";
  const iris_1825i_529 = iris_1825i_127.protos[iris_1825i_127.main]
   const iris_1825i_395 = new iris_1825i_237(iris_1825i_127, iris_1825i_529, [], true);
	const iris_1825i_4 = new iris_1825i_236()
   iris_1825i_4.indent = 0
	iris_1825i_395.walk(iris_1825i_4, 0, iris_1825i_529.code.length, -1, false)

   let iris_1825i_530 = "-- 1825's iris decompier (the best in the world down under)\n\n";
	const iris_1825i_531 = (iris_1825i_46) => iris_1825i_46.slice(0, 9) === 'function ' || iris_1825i_46.slice(0, 15) === 'local function '
  const iris_1825i_532 = (iris_1825i_46) => iris_1825i_46 === "end";
    for (let iris_1825i_5 = 0; iris_1825i_5 < iris_1825i_4.lines.length; iris_1825i_5++) {
        const iris_1825i_173 = iris_1825i_4.lines[iris_1825i_5]
        const iris_1825i_391 = Math.max(0, iris_1825i_173.level)
    if (iris_1825i_391 === 0 && iris_1825i_5 > 0 && iris_1825i_531(iris_1825i_173.text)) {
			if (iris_1825i_530.length > 0 && iris_1825i_530[iris_1825i_530.length - 1] === "\n") {
        const iris_1825i_418 = iris_1825i_530.lastIndexOf("\n", iris_1825i_530.length - 2)
        if (iris_1825i_418 !== -1 && iris_1825i_530[iris_1825i_418 + 1] !== "\n") iris_1825i_530 += "\n"
         }
        }
    const iris_1825i_451 = iris_1825i_146().repeat(iris_1825i_391)
        iris_1825i_530 += iris_1825i_451 + iris_1825i_173.text + "\n";
		if (iris_1825i_391 === 0 && iris_1825i_532(iris_1825i_173.text) && iris_1825i_5 + 1 < iris_1825i_4.lines.length) iris_1825i_530 += "\n";
   }
	return messy_format(iris_1825i_527(iris_1825i_402(iris_1825i_530)))
}


function iris_1825i_533 (iris_1825i_141) {
   const iris_1825i_127 = iris_1825i_535(iris_1825i_141);
  return iris_1825i_528(iris_1825i_127);
}

function iris_1825i_534(iris_1825i_141) {
	const iris_1825i_127 = iris_1825i_535(iris_1825i_141);
   return { source: iris_1825i_528(iris_1825i_127), program: iris_1825i_127, version: iris_1825i_127.version, decodedFromBase64: iris_1825i_127._fromB64 === true }
}

function iris_1825i_535 (iris_1825i_141) {
	let iris_1825i_536 = '';
   const iris_1825i_537 = (iris_1825i_12) => {
		try {
			return iris_1825i_105(iris_1825i_12)
        } catch (iris_1825i_123) {
         iris_1825i_536 = iris_1825i_123.message || String(iris_1825i_123);
            return null
		}
  }
	if (typeof Uint8Array !== "undefined" && iris_1825i_141 instanceof Uint8Array) {
    const iris_1825i_55 = iris_1825i_537(iris_1825i_141)
		if (iris_1825i_55) { iris_1825i_55._fromB64 = false; return iris_1825i_55 }
   } else if (iris_1825i_141 && typeof iris_1825i_141 === "object") {
      if (iris_1825i_141.bytes && iris_1825i_141.bytes.length > 0) {
         const iris_1825i_55 = iris_1825i_537(iris_1825i_141.bytes instanceof Uint8Array ? iris_1825i_141.bytes : new Uint8Array(iris_1825i_141.bytes));
			if (iris_1825i_55) { iris_1825i_55._fromB64 = false; return iris_1825i_55 }
		}
    if (iris_1825i_141.base64) {
      const iris_1825i_538 = iris_1825i_140(iris_1825i_141.base64)
            if (!iris_1825i_538) throw new Error("invalid base64 input");
         const iris_1825i_55 = iris_1825i_537(iris_1825i_538)
			if (!iris_1825i_55) throw new Error('failed to parse bytecode: ' + iris_1825i_536)
         iris_1825i_55._fromB64 = true; return iris_1825i_55
        }
    }
    if (iris_1825i_536) throw new Error('failed to parse bytecode: ' + iris_1825i_536);
	throw new Error('no bytecode provided (expected `bytes` or `base64`)')
}

function iris_1825i_539(iris_1825i_540) {
  return iris_1825i_533({ base64: iris_1825i_540 });
}

function iris_1825i_541(iris_1825i_141) {
    const iris_1825i_127 = iris_1825i_535(iris_1825i_141)
	return iris_1825i_138(iris_1825i_127);
}

const iris_1825i_542 = {
  decompile: iris_1825i_533,
   decompileResult: iris_1825i_534,
  decompileBase64: iris_1825i_539,
  disassemble: iris_1825i_541,
  disassembleProto: (iris_1825i_141, iris_1825i_56) => iris_1825i_139(iris_1825i_535(iris_1825i_141), iris_1825i_56),
	read: (iris_1825i_141) => iris_1825i_535(iris_1825i_141),
	base64Decode: iris_1825i_140,
	Op: iris_1825i_13,
  ConstK: iris_1825i_14,
  OP_NAMES: iris_1825i_15,
  versionRange: [iris_1825i_38, iris_1825i_39],
}

if (typeof globalThis !== "undefined") globalThis.iris = iris_1825i_542
if (typeof globalThis !== 'undefined') globalThis.IrisDecompiler = iris_1825i_542;
if (typeof window !== 'undefined' && window !== globalThis) window.iris = iris_1825i_542
if (typeof module !== 'undefined' && module.exports) module.exports = iris_1825i_542

})()
