"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpIcon,
    Paperclip,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function VercelV0Chat() {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showInitial, setShowInitial] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!value.trim()) return;

        // Start transition to chat mode
        if (showInitial) {
            setShowInitial(false);
        }

        const userMessage: Message = {
            id: Date.now().toString(),
            content: value,
            role: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        const userInput = value;
        setValue("");
        adjustHeight(true);
        setIsLoading(true);

        try {
            // Call Gemini API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userInput,
                    messages: messages // Send conversation history
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get AI response');
            }

            const data = await response.json();
            
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.response,
                role: 'assistant',
                timestamp: new Date(),
            };
            
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error calling AI:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: "Sorry, I'm having trouble connecting right now. Please try again.",
                role: 'assistant',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
                {showInitial && messages.length === 0 ? (
                    <motion.div
                        key="initial"
                        initial={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0,
                            scale: 0.95,
                            y: -20
                        }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className="flex flex-col items-center p-4 space-y-8"
                    >
                        <motion.h1 
                            className="text-4xl font-sans italic font-medium text-gray-700 dark:text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            How can I help you today?
                        </motion.h1>

                        <motion.div 
                            className="w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                <div className="overflow-y-auto">
                                    <Textarea
                                        ref={textareaRef}
                                        value={value}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                            adjustHeight();
                                        }}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ask from Kiriputha..."
                                        className={cn(
                                            "w-full px-4 py-3",
                                            "resize-none",
                                            "bg-transparent",
                                            "border-none",
                                            "text-black dark:text-white text-sm",
                                            "focus:outline-none",
                                            "focus-visible:ring-0 focus-visible:ring-offset-0",
                                            "placeholder:text-neutral-500 placeholder:text-sm",
                                            "min-h-[60px]"
                                        )}
                                        style={{
                                            overflow: "hidden",
                                        }}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-3">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="group p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1"
                                        >
                                            <Paperclip className="w-4 h-4 text-black dark:text-white" />
                                            <span className="text-xs text-neutral-500 dark:text-zinc-400 hidden group-hover:inline transition-opacity">
                                                Attach
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={handleSendMessage}
                                            disabled={!value.trim()}
                                            className={cn(
                                                "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-neutral-300 dark:border-zinc-700 hover:border-neutral-400 dark:hover:border-zinc-600 hover:bg-neutral-100 dark:hover:bg-zinc-800 flex items-center justify-between gap-1",
                                                value.trim()
                                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                                    : "text-neutral-500 dark:text-zinc-400"
                                            )}
                                        >
                                            <ArrowUpIcon
                                                className={cn(
                                                    "w-4 h-4",
                                                    value.trim()
                                                        ? "text-white dark:text-black"
                                                        : "text-neutral-500 dark:text-zinc-400"
                                                )}
                                            />
                                            <span className="sr-only">Send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat"
                        initial={{ 
                            opacity: 0,
                            scale: 0.95,
                            y: 20
                        }}
                        animate={{ 
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        transition={{ 
                            duration: 0.4,
                            ease: "easeOut"
                        }}
                        className="flex flex-col h-[600px]"
                    >
                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <AnimatePresence>
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ 
                                            opacity: 0,
                                            y: 20,
                                            scale: 0.95
                                        }}
                                        animate={{ 
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        transition={{ 
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        className={cn(
                                            "flex",
                                            message.role === 'user' ? 'justify-end' : 'justify-start'
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "max-w-[80%] rounded-lg px-4 py-2",
                                                message.role === 'user'
                                                    ? "bg-black text-white"
                                                    : "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                                            )}
                                        >
                                            <p className="text-sm">{message.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-4 py-2 max-w-[80%]">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Container */}
                        <motion.div 
                            className="border-t border-neutral-200 dark:border-neutral-800 p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                <div className="overflow-y-auto">
                                    <Textarea
                                        ref={textareaRef}
                                        value={value}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                            adjustHeight();
                                        }}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type your message..."
                                        className={cn(
                                            "w-full px-4 py-3",
                                            "resize-none",
                                            "bg-transparent",
                                            "border-none",
                                            "text-black dark:text-white text-sm",
                                            "focus:outline-none",
                                            "focus-visible:ring-0 focus-visible:ring-offset-0",
                                            "placeholder:text-neutral-500 placeholder:text-sm",
                                            "min-h-[60px]"
                                        )}
                                        style={{
                                            overflow: "hidden",
                                        }}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-3">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="group p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1"
                                        >
                                            <Paperclip className="w-4 h-4 text-black dark:text-white" />
                                            <span className="text-xs text-neutral-500 dark:text-zinc-400 hidden group-hover:inline transition-opacity">
                                                Attach
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={handleSendMessage}
                                            disabled={!value.trim() || isLoading}
                                            className={cn(
                                                "px-1.5 py-1.5 rounded-lg text-sm transition-colors border border-neutral-300 dark:border-zinc-700 hover:border-neutral-400 dark:hover:border-zinc-600 hover:bg-neutral-100 dark:hover:bg-zinc-800 flex items-center justify-between gap-1",
                                                value.trim() && !isLoading
                                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                                    : "text-neutral-500 dark:text-zinc-400"
                                            )}
                                        >
                                            <ArrowUpIcon
                                                className={cn(
                                                    "w-4 h-4",
                                                    value.trim() && !isLoading
                                                        ? "text-white dark:text-black"
                                                        : "text-neutral-500 dark:text-zinc-400"
                                                )}
                                            />
                                            <span className="sr-only">Send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

 