<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Support\Facades\Session;


class CartController extends Controller
{
    public function index()
    {
        return view('cart');
    }

    public function showProducts()
    {

    }

    public function addToCart(Request $req,$id)
    {
        $product = Product::find($id);
        $oldCart = Session('cart')?Session::get('cart'):null;
        $cart = new Cart($oldCart);
        $cart->add($product, $id);
        //$req->session()->put('cart', null);
        $req->session()->put('cart', $cart);
        return redirect()->back();
    }



}





?>