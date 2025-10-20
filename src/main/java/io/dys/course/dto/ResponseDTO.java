package io.dys.course.dto;


import io.dys.course.utils.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDTO<T> {
    private String api;
    private T data;
    private String message;
    private Status status;

}
