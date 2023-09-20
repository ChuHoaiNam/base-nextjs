import { NextResponse } from "next/server";
import { buildConfig } from "../utils";

export async function GET(request: Request) {
    const { pathname, search } = new URL(request.url);

    const res = await fetch(`${process.env.API_URL}${pathname}${search}`);

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function POST(request: Request) {
    const { pathname, search } = new URL(request.url);

    const config = await buildConfig(request);

    const res = await fetch(`${process.env.API_URL}${pathname}${search}`, {
        method: "POST",
        ...config,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function PUT(request: Request) {
    const { pathname, search } = new URL(request.url);
    const config = await buildConfig(request);
    const res = await fetch(`${process.env.API_URL}${pathname}${search}`, {
        method: "PUT",
        ...config,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function DELETE(request: Request) {
    const { pathname, search } = new URL(request.url);
    const config = await buildConfig(request);
    const res = await fetch(`${process.env.API_URL}${pathname}${search}`, {
        method: "DELETE",
        ...config,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}
