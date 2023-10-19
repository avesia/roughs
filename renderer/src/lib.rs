#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub fn create_renderer(id: &str) {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas_container = document.get_element_by_id(id).unwrap();
    let canvas = document.create_element("canvas").unwrap();

    canvas_container.append_child(&canvas).unwrap();

    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into().unwrap();

    let width = canvas.width();
    let height = canvas.height();

    let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
        backends: wgpu::Backends::all(),
        dx12_shader_compiler: Default::default(),
    });

    let surface = instance.create_surface_from_canvas(canvas);
}
