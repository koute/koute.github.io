"use strict";

if( typeof Rust === 'undefined' ) {
    var Rust = {};
}

(function( root, factory ) {
    if( typeof define === "function" && define.amd ) {
        define( [], factory );
    } else if( typeof module === "object" && module.exports ) {
        module.exports = factory();
    } else {
        factory();
    }
}( this, function() {
    const Module = {};
    let HEAP8 = null;
    let HEAP16 = null;
    let HEAP32 = null;
    let HEAPU8 = null;
    let HEAPU16 = null;
    let HEAPU32 = null;
    let HEAPF32 = null;
    let HEAPF64 = null;

    Object.defineProperty( Module, 'nodejs', { value: (typeof window === 'undefined') } );
    Object.defineProperty( Module, 'exports', { value: {} } );

    const __imports = {
        env: {
            "__extjs_de942ef9ccd064c41dc92d5b5bf83c61aeb00278": function($0) {
                Module.STDWEB.increment_refcount( $0 );
            },
            "__extjs_d8a439451216bbc6cd9f3012f189d2ad6a2e9459": function($0) {
                Module.STDWEB.decrement_refcount( $0 );
            },
            "__extjs_4f9c01bebb49b393ef442c1e8a6bff97c5a8f3b2": function($0, $1, $2, $3, $4) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);$3 = Module.STDWEB.to_js($3);$4 = Module.STDWEB.to_js($4);Module.STDWEB.from_js($0, (function(){var gl ; var webgl_names = ["webgl" , "experimental-webgl" , "webkit-3d" , "moz-webgl"]; for (var i = 0 ; i < webgl_names.length ; ++i){var name = webgl_names [i]; try {gl = ($1). getContext (name);}catch (err){}if (gl){console.log ("WebGL support using context:" , name); break ;}}if (gl ===null){console.error ("WebGL rendering context not found."); return null ;}var vertex_shader = gl.createShader (gl.VERTEX_SHADER); var fragment_shader = gl.createShader (gl.FRAGMENT_SHADER); gl.shaderSource (vertex_shader , ($2)); gl.shaderSource (fragment_shader , ($3)); gl.compileShader (vertex_shader); gl.compileShader (fragment_shader); if (! gl.getShaderParameter (vertex_shader , gl.COMPILE_STATUS)){console.error ("WebGL vertex shader compilation failed:" , gl.getShaderInfoLog (vertex_shader)); return null ;}if (! gl.getShaderParameter (fragment_shader , gl.COMPILE_STATUS)){console.error ("WebGL fragment shader compilation failed:" , gl.getShaderInfoLog (fragment_shader)); return null ;}var program = gl.createProgram (); gl.attachShader (program , vertex_shader); gl.attachShader (program , fragment_shader); gl.linkProgram (program); if (! gl.getProgramParameter (program , gl.LINK_STATUS)){console.error ("WebGL program linking failed!"); return null ;}gl.useProgram (program); var vertex_attr = gl.getAttribLocation (program , "a_position"); var texcoord_attr = gl.getAttribLocation (program , "a_texcoord"); gl.enableVertexAttribArray (vertex_attr); gl.enableVertexAttribArray (texcoord_attr); var sampler_uniform = gl.getUniformLocation (program , "u_sampler"); gl.uniform1i (sampler_uniform , 0); var matrix = ($4); var matrix_uniform = gl.getUniformLocation (program , "u_matrix"); gl.uniformMatrix4fv (matrix_uniform , false , matrix); var texture = gl.createTexture (); gl.bindTexture (gl.TEXTURE_2D , texture); gl.texImage2D (gl.TEXTURE_2D , 0 , gl.RGBA , 256 , 256 , 0 , gl.RGBA , gl.UNSIGNED_BYTE , new Uint8Array (256 * 256 * 4)); gl.texParameteri (gl.TEXTURE_2D , gl.TEXTURE_MAG_FILTER , gl.NEAREST); gl.texParameteri (gl.TEXTURE_2D , gl.TEXTURE_MIN_FILTER , gl.NEAREST); var vertex_buffer = gl.createBuffer (); gl.bindBuffer (gl.ARRAY_BUFFER , vertex_buffer); var vertices = [0.0 , 0.0 , 0.0 , 240.0 , 256.0 , 0.0 , 256.0 , 240.0]; gl.bufferData (gl.ARRAY_BUFFER , new Float32Array (vertices), gl.STATIC_DRAW); gl.vertexAttribPointer (vertex_attr , 2 , gl.FLOAT , false , 0 , 0); var texcoord_buffer = gl.createBuffer (); gl.bindBuffer (gl.ARRAY_BUFFER , texcoord_buffer); var texcoords = [0.0 , 0.0 , 0.0 , 240.0 / 256.0 , 1.0 , 0.0 , 1.0 , 240.0 / 256.0]; gl.bufferData (gl.ARRAY_BUFFER , new Float32Array (texcoords), gl.STATIC_DRAW); gl.vertexAttribPointer (texcoord_attr , 2 , gl.FLOAT , false , 0 , 0); var index_buffer = gl.createBuffer (); gl.bindBuffer (gl.ELEMENT_ARRAY_BUFFER , index_buffer); var indices = [0 , 1 , 2 , 2 , 3 , 1]; gl.bufferData (gl.ELEMENT_ARRAY_BUFFER , new Uint16Array (indices), gl.STATIC_DRAW); gl.clearColor (0.0 , 0.0 , 0.0 , 1.0); gl.enable (gl.DEPTH_TEST); gl.viewport (0 , 0 , 256 , 240); return gl ;})());
            },
            "__extjs_c700edb5c54b5e504eb36d985d34946ef9aefed6": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){var h = {}; var canvas = ($1); h.gl = ($2); h.audio = new AudioContext (); h.empty_audio_buffers = []; h.play_timestamp = 0 ; if (! h.gl){console.log ("No WebGL; using Canvas API"); var new_canvas = canvas.cloneNode (true); canvas.parentNode.replaceChild (new_canvas , canvas); canvas = new_canvas ; h.ctx = canvas.getContext ("2d"); h.img = h.ctx.createImageData (256 , 240); h.buffer = new Uint32Array (h.img.data.buffer);}return h ;})());
            },
            "__extjs_0c73bd5ada277a14293d6b0e64b6b75fb3b9effb": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){console.error ("Execution error:" , ($1));})());
            },
            "__extjs_7c77c7ed4da7885462e1014bd61c8cea96d0ce37": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){var h = ($1); var framebuffer = ($2); if (h.gl){var data = new Uint8Array (framebuffer.buffer , framebuffer.byteOffset , framebuffer.byteLength); h.gl.texSubImage2D (h.gl.TEXTURE_2D , 0 , 0 , 0 , 256 , 240 , h.gl.RGBA , h.gl.UNSIGNED_BYTE , data); h.gl.drawElements (h.gl.TRIANGLES , 6 , h.gl.UNSIGNED_SHORT , 0);}else {h.buffer.set (framebuffer); h.ctx.putImageData (h.img , 0 , 0);}})());
            },
            "__extjs_de2045438e2fbf2038c4be6b016536e8c1188b85": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){var req = new XMLHttpRequest (); req.addEventListener ("load" , function (){var cb = ($1); cb (JSON.parse (req.responseText)); cb.drop ();}); req.open ("GET" , "roms/index.json"); req.send ();})());
            },
            "__extjs_8adab11649c3c91785d157bc51cb5d1ce1d8d8f8": function() {
                Module.STDWEB = {};   Module.STDWEB.to_utf8 = function to_utf8( str, addr ) {     for( var i = 0; i < str.length; ++i ) {                                    var u = str.charCodeAt( i );          if( u >= 0xD800 && u <= 0xDFFF ) {             u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt( ++i ) & 0x3FF);         }          if( u <= 0x7F ) {             HEAPU8[ addr++ ] = u;         } else if( u <= 0x7FF ) {             HEAPU8[ addr++ ] = 0xC0 | (u >> 6);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0xFFFF ) {             HEAPU8[ addr++ ] = 0xE0 | (u >> 12);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0x1FFFFF ) {             HEAPU8[ addr++ ] = 0xF0 | (u >> 18);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else if( u <= 0x3FFFFFF ) {             HEAPU8[ addr++ ] = 0xF8 | (u >> 24);             HEAPU8[ addr++ ] = 0x80 | ((u >> 18) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         } else {             HEAPU8[ addr++ ] = 0xFC | (u >> 30);             HEAPU8[ addr++ ] = 0x80 | ((u >> 24) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 18) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 12) & 63);             HEAPU8[ addr++ ] = 0x80 | ((u >> 6) & 63);             HEAPU8[ addr++ ] = 0x80 | (u & 63);         }     } };  Module.STDWEB.noop = function() {}; Module.STDWEB.to_js = function to_js( address ) {     var kind = HEAPU8[ address + 12 ];     if( kind === 0 ) {         return undefined;     } else if( kind === 1 ) {         return null;     } else if( kind === 2 ) {         return HEAP32[ address / 4 ];     } else if( kind === 3 ) {         return HEAPF64[ address / 8 ];     } else if( kind === 4 ) {         var pointer = HEAPU32[ address / 4 ];         var length = HEAPU32[ (address + 4) / 4 ];         return Module.STDWEB.to_js_string( pointer, length );     } else if( kind === 5 ) {         return false;     } else if( kind === 6 ) {         return true;     } else if( kind === 7 ) {         var pointer = HEAPU32[ address / 4 ];         var length = HEAPU32[ (address + 4) / 4 ];         var output = [];         for( var i = 0; i < length; ++i ) {             output.push( Module.STDWEB.to_js( pointer + i * 16 ) );         }         return output;     } else if( kind === 8 ) {         var value_array_pointer = HEAPU32[ address / 4 ];         var length = HEAPU32[ (address + 4) / 4 ];         var key_array_pointer = HEAPU32[ (address + 8) / 4 ];         var output = {};         for( var i = 0; i < length; ++i ) {             var key_pointer = HEAPU32[ (key_array_pointer + i * 8) / 4 ];             var key_length = HEAPU32[ (key_array_pointer + 4 + i * 8) / 4 ];             var key = Module.STDWEB.to_js_string( key_pointer, key_length );             var value = Module.STDWEB.to_js( value_array_pointer + i * 16 );             output[ key ] = value;         }         return output;     } else if( kind === 9 || kind === 11 || kind === 12 ) {         return Module.STDWEB.acquire_js_reference( HEAP32[ address / 4 ] );     } else if( kind === 10 ) {         var adapter_pointer = HEAPU32[ address / 4 ];         var pointer = HEAPU32[ (address + 4) / 4 ];         var deallocator_pointer = HEAPU32[ (address + 8) / 4 ];         var output = function() {             if( pointer === 0 ) {                 throw new ReferenceError( "Already dropped Rust function called!" );             }              var args = Module.STDWEB.alloc( 16 );             Module.STDWEB.serialize_array( args, arguments );             Module.STDWEB.dyncall( "vii", adapter_pointer, [pointer, args] );             var result = Module.STDWEB.tmp;             Module.STDWEB.tmp = null;              return result;         };          output.drop = function() {             output.drop = Module.STDWEB.noop;             var function_pointer = pointer;             pointer = 0;              Module.STDWEB.dyncall( "vi", deallocator_pointer, [function_pointer] );         };          return output;     } else if( kind === 13 ) {         var adapter_pointer = HEAPU32[ address / 4 ];         var pointer = HEAPU32[ (address + 4) / 4 ];         var deallocator_pointer = HEAPU32[ (address + 8) / 4 ];         var output = function() {             if( pointer === 0 ) {                 throw new ReferenceError( "Already called or dropped FnOnce function called!" );             }              output.drop = Module.STDWEB.noop;             var function_pointer = pointer;             pointer = 0;              var args = Module.STDWEB.alloc( 16 );             Module.STDWEB.serialize_array( args, arguments );             Module.STDWEB.dyncall( "vii", adapter_pointer, [function_pointer, args] );             var result = Module.STDWEB.tmp;             Module.STDWEB.tmp = null;              return result;         };          output.drop = function() {             output.drop = Module.STDWEB.noop;             var function_pointer = pointer;             pointer = 0;              Module.STDWEB.dyncall( "vi", deallocator_pointer, [function_pointer] );         };          return output;     } else if( kind === 14 ) {         var pointer = HEAPU32[ address / 4 ];         var length = HEAPU32[ (address + 4) / 4 ];         var array_kind = HEAPU32[ (address + 8) / 4 ];         var pointer_end = pointer + length;          switch( array_kind ) {             case 0:                 return HEAPU8.subarray( pointer, pointer_end );             case 1:                 return HEAP8.subarray( pointer, pointer_end );             case 2:                 return HEAPU16.subarray( pointer, pointer_end );             case 3:                 return HEAP16.subarray( pointer, pointer_end );             case 4:                 return HEAPU32.subarray( pointer, pointer_end );             case 5:                 return HEAP32.subarray( pointer, pointer_end );             case 6:                 return HEAPF32.subarray( pointer, pointer_end );             case 7:                 return HEAPF64.subarray( pointer, pointer_end );         }     } };  Module.STDWEB.serialize_object = function serialize_object( address, value ) {     var keys = Object.keys( value );     var length = keys.length;     var key_array_pointer = Module.STDWEB.alloc( length * 8 );     var value_array_pointer = Module.STDWEB.alloc( length * 16 );     HEAPU8[ address + 12 ] = 8;     HEAPU32[ address / 4 ] = value_array_pointer;     HEAPU32[ (address + 4) / 4 ] = length;     HEAPU32[ (address + 8) / 4 ] = key_array_pointer;     for( var i = 0; i < length; ++i ) {         var key = keys[ i ];         var key_length = Module.STDWEB.utf8_len( key );         var key_pointer = Module.STDWEB.alloc( key_length );         Module.STDWEB.to_utf8( key, key_pointer );          var key_address = key_array_pointer + i * 8;         HEAPU32[ key_address / 4 ] = key_pointer;         HEAPU32[ (key_address + 4) / 4 ] = key_length;          Module.STDWEB.from_js( value_array_pointer + i * 16, value[ key ] );     } };  Module.STDWEB.serialize_array = function serialize_array( address, value ) {     var length = value.length;     var pointer = Module.STDWEB.alloc( length * 16 );     HEAPU8[ address + 12 ] = 7;     HEAPU32[ address / 4 ] = pointer;     HEAPU32[ (address + 4) / 4 ] = length;     for( var i = 0; i < length; ++i ) {         Module.STDWEB.from_js( pointer + i * 16, value[ i ] );     } };  Module.STDWEB.from_js = function from_js( address, value ) {     var kind = Object.prototype.toString.call( value );     if( kind === "[object String]" ) {         var length = Module.STDWEB.utf8_len( value );         var pointer = 0;         if( length > 0 ) {             pointer = Module.STDWEB.alloc( length );             Module.STDWEB.to_utf8( value, pointer );         }         HEAPU8[ address + 12 ] = 4;         HEAPU32[ address / 4 ] = pointer;         HEAPU32[ (address + 4) / 4 ] = length;     } else if( kind === "[object Number]" ) {         if( value === (value|0) ) {             HEAPU8[ address + 12 ] = 2;             HEAP32[ address / 4 ] = value;         } else {             HEAPU8[ address + 12 ] = 3;             HEAPF64[ address / 8 ] = value;         }     } else if( value === null ) {         HEAPU8[ address + 12 ] = 1;     } else if( value === undefined ) {         HEAPU8[ address + 12 ] = 0;     } else if( value === false ) {         HEAPU8[ address + 12 ] = 5;     } else if( value === true ) {         HEAPU8[ address + 12 ] = 6;     } else {         var refid = Module.STDWEB.acquire_rust_reference( value );         var id = 9;         if( kind === "[object Object]" ) {             id = 11;         } else if( kind === "[object Array]" || kind === "[object Arguments]" ) {             id = 12;         }          HEAPU8[ address + 12 ] = id;         HEAP32[ address / 4 ] = refid;     } };    Module.STDWEB.to_js_string = function to_js_string( index, length ) {     index = index|0;     length = length|0;     var end = (index|0) + (length|0);     var output = "";     while( index < end ) {         var x = HEAPU8[ index++ ];         if( x < 128 ) {             output += String.fromCharCode( x );             continue;         }         var init = (x & (0x7F >> 2));         var y = 0;         if( index < end ) {             y = HEAPU8[ index++ ];         }         var ch = (init << 6) | (y & 63);         if( x >= 0xE0 ) {             var z = 0;             if( index < end ) {                 z = HEAPU8[ index++ ];             }             var y_z = ((y & 63) << 6) | (z & 63);             ch = init << 12 | y_z;             if( x >= 0xF0 ) {                 var w = 0;                 if( index < end ) {                     w = HEAPU8[ index++ ];                 }                 ch = (init & 7) << 18 | ((y_z << 6) | (w & 63));             }         }         output += String.fromCharCode( ch );         continue;     }     return output; };  var id_to_ref_map = {}; var id_to_refcount_map = {}; var ref_to_id_map = new WeakMap(); var ref_to_id_symbol_map = {}; var last_refid = 1;  Module.STDWEB.acquire_rust_reference = function( reference ) {     if( reference === undefined || reference === null ) {         return 0;     }      var refid = ref_to_id_map.get( reference );     if( refid === undefined ) {         refid = ref_to_id_symbol_map[ reference ];     }      if( refid === undefined ) {         refid = last_refid++;         if( typeof reference === "symbol" ) {             ref_to_id_symbol_map[ reference ] = refid;         } else {             ref_to_id_map.set( reference, refid );         }         id_to_ref_map[ refid ] = reference;         id_to_refcount_map[ refid ] = 1;     } else {         id_to_refcount_map[ refid ]++;     }      return refid; };  Module.STDWEB.acquire_js_reference = function( refid ) {     return id_to_ref_map[ refid ]; };  Module.STDWEB.increment_refcount = function( refid ) {     id_to_refcount_map[ refid ]++; };  Module.STDWEB.decrement_refcount = function( refid ) {     id_to_refcount_map[ refid ]--;     if( id_to_refcount_map[ refid ] === 0 ) {         var reference = id_to_ref_map[ refid ];         delete id_to_ref_map[ refid ];         delete id_to_refcount_map[ refid ];         if( typeof reference === "symbol" ) {             delete ref_to_id_symbol_map[ reference ];         } else {             ref_to_id_map.delete( reference );         }     } }; Module.STDWEB.alloc = Module.web_malloc; Module.STDWEB.dyncall = function( signature, ptr, args ) {     return Module.web_table.get( ptr ).apply( null, args ); };  Module.STDWEB.utf8_len = function utf8_len( str ) {     let len = 0;     for( let i = 0; i < str.length; ++i ) {                           let u = str.charCodeAt( i );          if( u >= 0xD800 && u <= 0xDFFF ) {             u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt( ++i ) & 0x3FF);         }          if( u <= 0x7F ) {             ++len;         } else if( u <= 0x7FF ) {             len += 2;         } else if( u <= 0xFFFF ) {             len += 3;         } else if( u <= 0x1FFFFF ) {             len += 4;         } else if( u <= 0x3FFFFFF ) {             len += 5;         } else {             len += 6;         }     }     return len; };
            },
            "__extjs_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf": function() {
                console.error( 'Encountered a panic!' );
            },
            "__extjs_b00b05929b445348eab177b6d3f509bcaa28782e": function($0, $1) {
                console.error( 'Panic error message:', Module.STDWEB.to_js_string( $0, $1 ) );
            },
            "__extjs_20637d8f642203b38c263a5d0f43b9d88ec67c31": function($0, $1, $2) {
                console.error( 'Panic location:', Module.STDWEB.to_js_string( $0, $1 ) + ':' + $2 );
            },
            "__extjs_ac7ced275c794bbaa5f758ba4a5c0d89d27a7023": function($0, $1) {
                var object = Module.STDWEB.acquire_js_reference( $0 );Module.STDWEB.serialize_object( $1, object );
            },
            "__extjs_85c89905cb5544ba0b5b64bc057eda6a71c48586": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). length ;})());
            },
            "__extjs_04dd9341c0b229d639d72dc9f8e0bffb983c60a1": function($0, $1) {
                var array = Module.STDWEB.acquire_js_reference( $0 );Module.STDWEB.serialize_array( $1, array );
            },
            "__extjs_cf8ef57870d176e111428c0ad472311c5c8d5d07": function($0) {
                Module.STDWEB.from_js($0, (function(){return window ;})());
            },
            "__extjs_d12a8a2eb9b1308d78c85a774baa5ccf56165b6a": function($0) {
                Module.STDWEB.from_js($0, (function(){return document ;})());
            },
            "__extjs_798df3b3e33592ba1fb77845033bc0b4316ce74f": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){return ($1). getElementById (($2));})());
            },
            "__extjs_0e0435c2fbabe7db6df9fbbf664296db7d516457": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){return ($1). createElement (($2));})());
            },
            "__extjs_8c7908d2268c4770bedc2894c2118ab5d7d993a8": function($0, $1) {
                $0 = Module.STDWEB.to_js($0);$1 = Module.STDWEB.to_js($1);($0). add (($1));
            },
            "__extjs_670cf0242dbd274bf335b4b1314dd0dd3029abfc": function($0, $1) {
                $0 = Module.STDWEB.to_js($0);$1 = Module.STDWEB.to_js($1);($0). remove (($1));
            },
            "__extjs_aee2e3d965273ce56784ad79020b1634524ead1f": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){return ($1)[($2)];})());
            },
            "__extjs_0bc93394b7bc87ad4c1136cd76874a58e288ebb5": function($0) {
                Module.STDWEB.from_js($0, (function(){return new FileReader ();})());
            },
            "__extjs_6fe73f75f3b2940a16ef803b0b40ab9fdd39de41": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof FileReader) | 0;
            },
            "__extjs_db86740fb10031f3ac8013d42cc474ce05edb7dc": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). result ;})());
            },
            "__extjs_a40143b9ffee1c5a66d10c515a77450be2e45d49": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof ArrayBuffer) | 0;
            },
            "__extjs_e28c795ff773d5944c05404ec094b4294feca54b": function($0) {
                return Module.STDWEB.acquire_rust_reference( new Uint8Array( Module.STDWEB.acquire_js_reference( $0 ) ) );
            },
            "__extjs_f0da9e3af46afb4353410c272d5cdc083a223958": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof Uint8Array) | 0;
            },
            "__extjs_a912800d51bd3116fa042eca2d72942d77914d5b": function($0, $1) {
                $0 = Module.STDWEB.to_js($0);$1 = Module.STDWEB.to_js($1);var array = ($0); var pointer = ($1); HEAPU8.set (array , pointer);
            },
            "__extjs_81d99dd180b9769eb1e2b2849590216cf5c21704": function($0, $1, $2, $3) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);$3 = Module.STDWEB.to_js($3);Module.STDWEB.from_js($0, (function(){var listener = ($1); ($2). addEventListener (($3), listener); return listener ;})());
            },
            "__extjs_2339159f69df37bd6978051aaf3e31da270868de": function($0, $1) {
                $0 = Module.STDWEB.to_js($0);$1 = Module.STDWEB.to_js($1);($0). appendChild (($1));
            },
            "__extjs_17387372df61801772537d47ad89f1ac0ca5db88": function($0, $1) {
                $0 = Module.STDWEB.to_js($0);$1 = Module.STDWEB.to_js($1);($0). textContent = ($1);
            },
            "__extjs_77da994737f528616d9d89aef65c9fdec5e5283d": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). classList ;})());
            },
            "__extjs_a38b66c2df44a351a4a5666be4ccc6231e17e002": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){var req = new XMLHttpRequest (); req.addEventListener ("load" , function (){($1)(req.response);}); req.open ("GET" , "roms/" + ($2)); req.responseType = "arraybuffer" ; req.send ();})());
            },
            "__extjs_ff2c75b4783fd5c9d8c934bbd4a03e66527e05e4": function($0) {
                Module.STDWEB.tmp = Module.STDWEB.to_js( $0 );
            },
            "__extjs_7454d04402ec90b4dd0de9abaf2d2d650112f2e3": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof MouseEvent) | 0;
            },
            "__extjs_119b15a8986379cb1749d1fdd2901113060c0ce5": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof Event) | 0;
            },
            "__extjs_ff89c52e967bd42e96738daa10134faf3e0729e6": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). target ;})());
            },
            "__extjs_3c664cb92555b5cfee8cefcbfbf9a07b1bb0a71c": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof EventTarget) | 0;
            },
            "__extjs_e41520fac56488c1ea9c1568ae72fdbe49c32741": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof HTMLInputElement) | 0;
            },
            "__extjs_a59db4e122b98e6cc9bb9520dafadabc87919950": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). files ;})());
            },
            "__extjs_d8c6bae028ffed602213e31ea89410d25331dfbd": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof FileList) | 0;
            },
            "__extjs_e9d84225304abfe1f0ac0649a5e9eacd15517749": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof KeyboardEvent) | 0;
            },
            "__extjs_21ca452112a9fbc71e2e43a589896d83c68b5791": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). key ;})());
            },
            "__extjs_84c33117bbcdea15c2c7cef1b33f9ea9af612b7d": function($0) {
                $0 = Module.STDWEB.to_js($0);($0). preventDefault ();
            },
            "__extjs_60aa5a474cddf32185f9e5fa82e7fac076520b1e": function($0) {
                return (Module.STDWEB.acquire_js_reference( $0 ) instanceof ProgressEvent) | 0;
            },
            "__extjs_1870294e18173a90b278726cd8cf82b46b9954e5": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){var h = ($1); var samples = ($2); var sample_rate = 44100 ; var sample_count = samples.length ; var latency = 0.032 ; var audio_buffer ; if (h.empty_audio_buffers.length ===0){audio_buffer = h.audio.createBuffer (1 , sample_count , sample_rate);}else {audio_buffer = h.empty_audio_buffers.pop ();}audio_buffer.getChannelData (0). set (samples); var node = h.audio.createBufferSource (); node.connect (h.audio.destination); node.buffer = audio_buffer ; node.onended = function (){h.empty_audio_buffers.push (audio_buffer);}; var buffered = h.play_timestamp - (h.audio.currentTime + latency); var play_timestamp = Math.max (h.audio.currentTime + latency , h.play_timestamp); node.start (play_timestamp); h.play_timestamp = play_timestamp + sample_count / sample_rate ; return buffered ;})());
            },
            "__extjs_0e9b3340cd2616d8a329733893958ffe1210d100": function($0, $1, $2) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);Module.STDWEB.from_js($0, (function(){($1). readAsArrayBuffer (($2));})());
            },
            "__extjs_affd075eaca85f0b8527a09a29f63ea699040bb6": function($0, $1) {
                $1 = Module.STDWEB.to_js($1);Module.STDWEB.from_js($0, (function(){return ($1). location ;})());
            },
            "__extjs_46fb63ba1b7e6890d4d24fd4ddc7d43b91c91694": function($0, $1, $2, $3) {
                Module.STDWEB.acquire_js_reference( $0 ).setTimeout( function() {Module.STDWEB.dyncall( 'vi', $1, [$2] );}, $3 );
            },
            "__extjs_a316bcb4c088cc4946fb65fe0972e7956d19f38e": function($0, $1, $2, $3) {
                $1 = Module.STDWEB.to_js($1);$2 = Module.STDWEB.to_js($2);$3 = Module.STDWEB.to_js($3);Module.STDWEB.from_js($0, (function(){var callback = ($1); var request = ($2). requestAnimationFrame (callback); return {request : request , callback : callback , window : ($3)};})());
            },
            "__web_on_grow": function() {
                const buffer = Module.instance.exports.memory.buffer;
                HEAP8 = new Int8Array( buffer );
                HEAP16 = new Int16Array( buffer );
                HEAP32 = new Int32Array( buffer );
                HEAPU8 = new Uint8Array( buffer );
                HEAPU16 = new Uint16Array( buffer );
                HEAPU32 = new Uint32Array( buffer );
                HEAPF32 = new Float32Array( buffer );
                HEAPF64 = new Float64Array( buffer );
            }
        }
    };

    function __load( instance ) {
        Object.defineProperty( Module, 'instance', { value: instance } );
        Object.defineProperty( Module, 'web_malloc', { value: Module.instance.exports.__web_malloc } );
        Object.defineProperty( Module, 'web_free', { value: Module.instance.exports.__web_free } );
        Object.defineProperty( Module, 'web_table', { value: Module.instance.exports.__web_table } );

        if( typeof module !== 'undefined' && module.exports ) {
            module.exports = Module.exports;
        } else {
            Rust.pinky_web.exports = Module.exports;
        }

        __imports.env.__web_on_grow();
        Module.instance.exports.__web_main();
    }

    if( Module.nodejs ) {
        const fs = require( 'fs' );
        const path = require( 'path' );
        const wasm_path = path.join( __dirname, "js/pinky-web.wasm" );
        const buffer = fs.readFileSync( wasm_path );
        const mod = new WebAssembly.Module( buffer );
        const instance = new WebAssembly.Instance( mod, __imports );
        __load( instance );
        return Module.exports;
    } else {
        const __promise = fetch( "js/pinky-web.wasm" )
            .then( response => response.arrayBuffer() )
            .then( bytes => WebAssembly.instantiate( bytes, __imports ) )
            .then( results => {
                __load( results.instance );
                console.log( "Finished loading Rust wasm module 'pinky_web'" );
                return Module.exports;
            })
            .catch( error => {
                console.log( "Error loading Rust wasm module 'pinky_web':", error );
                throw error;
            });

        Rust.pinky_web = __promise;
        return __promise;
    }
}));
