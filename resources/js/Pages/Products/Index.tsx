import Authenticated from '@/Layouts/AuthenticatedLayout'
import ActionLink from '@/components/action-Link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/table'
import { Product } from '@/lib/schemas'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'
import React from 'react'

const ProductIndex = ({ auth, products }: PageProps<{ products: Product[]}>) => {
  return (
      <Authenticated user={auth.user}>
          <Head title="Products" />

          <Card>
              <CardHeader>
                  <div className="flex justify-between items-center">
                      <CardTitle>Products</CardTitle>
                      <Button>Create</Button>
                  </div>
              </CardHeader>

              <Table>
                  <TableHeader>
                      <TableRow>
                          <TableHead>S/N</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="text-right">B.Price</TableHead>
                          <TableHead className="text-right">S.Price</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>W.Sale</TableHead>
                          <TableHead colSpan={2}>Discount</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {products.map((product, index) => (
                          <TableRow key={product.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{`${product.name} / ${product.unit}`}</TableCell>
                              <TableCell className="text-right">
                                  {Intl.NumberFormat().format(
                                      product.buying_price
                                  )}
                              </TableCell>
                              <TableCell className="text-right">
                                  {Intl.NumberFormat().format(
                                      product.selling_price
                                  )}
                              </TableCell>
                              <TableCell>
                                  {Intl.NumberFormat().format(product.stock)}
                              </TableCell>
                              <TableCell>
                                  {product.quantity_per_stock}
                              </TableCell>
                              <TableCell>{product.whole_sale}</TableCell>
                              <TableCell>
                                  {Intl.NumberFormat().format(product.discount)}
                              </TableCell>
                              <TableCell>
                                  <ActionLink
                                      url="products.edit"
                                      params={{ product: product.id }}
                                  />
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </Card>
      </Authenticated>
  );
}

export default ProductIndex