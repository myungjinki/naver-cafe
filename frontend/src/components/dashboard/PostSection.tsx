import React from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Post {
  id: number;
  type: string;
  category: string;
  status: string;
  checked: boolean;
}

interface PostSectionProps {
  posts: Post[];
}

export function PostSection({ posts }: PostSectionProps) {
  return (
    <Card className="col-span-5 bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold border-b border-gray-700 pb-2 mb-4">게시글 등록</h3>
        
        <div className="flex justify-end mb-4">
          <Button className="bg-green-600 hover:bg-green-700">
            등록하기
          </Button>
        </div>
        
        <div className="overflow-hidden rounded-md border border-gray-700 h-80">
          <ScrollArea className="h-80">
            <Table>
              <TableHeader className="bg-gray-700 sticky top-0">
                <TableRow className="hover:bg-gray-700">
                  <TableHead className="w-12 text-center">선택</TableHead>
                  <TableHead>게시글 제목</TableHead>
                  <TableHead>메모</TableHead>
                  <TableHead className="w-16 text-center">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id} className="hover:bg-gray-700 border-t border-gray-700">
                    <TableCell className="text-center">
                      <Checkbox checked={post.checked} className="border-gray-500" />
                    </TableCell>
                    <TableCell>{post.type}</TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
                        {post.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            변경하기
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            선택삭제
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 